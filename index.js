require('dotenv').config({silent: true});
import {start} from './src/server';

process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled rejection in Promise ", p, "because", reason);
});

const name = 'Action Server';

start()
  .then(
    _data => console.log('Started', name),
    err   => console.log('Could not start', name, 'because', err)
  )
  .catch(err => console.log('Caught Error starting', name, 'because', err));
