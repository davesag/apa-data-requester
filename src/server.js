import SocketIO  from 'socket.io';

import {Actions, connected, disconnected} from './actions';
import makeApp   from './appMaker';
import makeStore from './storeMaker';

import stateFilter   from './stateFilter';

const PORT        = process.env.PORT || 3000;

process.on('unhandledRejection', function(reason, p) {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

const start = function() {
  return new Promise((resolve, reject) => {

    const initSockets = (store, server) => {

      const io = new SocketIO(server);

      const connectionHandler = (socket) => {
        const id = socket.id;
        let oldState = null; // we'll set this later

        const unsubscribe = store.subscribe(() => {
          // TODO: Only emit if the state actually changed.
          const filteredState = stateFilter(store, id);
          const newState = JSON.stringify(filteredState);
          if (oldState === null || newState !== oldState) {
            io.to(id).emit('state', filteredState);
            oldState = newState;
          }
        });

        const disconnectionHandler = () => {
          store.dispatch(disconnected(id));
          unsubscribe();
        };

        const actionHandler = action => {
          const filteredAction = {
            ...action,
            id
          };
          store.dispatch.bind(store)(filteredAction);
        }

        const errorHandler = err => {
          console.log('Caught error', err, 'for connection', id);
        };

        socket.on('action', actionHandler);
        socket.on('disconnection', disconnectionHandler);
        socket.on('error', errorHandler);
        store.dispatch(connected(id, io));
      };

      io.on('connection', connectionHandler);

      return {io, server};
    };

    const app = makeApp();
    console.log('Created Web App');
    const store = makeStore();
    console.log('Created backend Redux Store');
    const webServer = app.listen(PORT, () => {
      console.log(`Web Server and WebSockets listening on port ${PORT}`);
      const {io, server} = initSockets(store, webServer);
      console.log('Socket IO initialised')
      Promise.all([
        // put any other initialisation promises here.
      ]).then(() => {
        // or here if you have stuff that depneds on previous stuff having been initialised.
        console.log('Server initialised');
        resolve({io, server, store});
      }, reject);
    });
  });
}

module.exports = {
  start
}
