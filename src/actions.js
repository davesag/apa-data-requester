import {makeAction, makeEmitAction} from './utils/actionMaker';

const ActionList = [
   // These are emitted to the client.
  'RESPONDED', // not yet defined.

  // These are received from the client.
  // There is no need to make an action for them but you might make a handler
  'REQUEST',

  // Internal use.
  'CONNECTED', // special in that it holds the connection id in the payload.
  'DISCONNECTED' // dispatched when a client disconnects
];
const Actions = ActionList.reduce((acc, elem) => { acc[elem] = elem; return acc; }, {});

const Internal = {
  connected:    (id, connection) => makeAction(Actions.CONNECTED, {id, connection}),
  disconnected: (connection)     => makeAction(Actions.DISCONNECTED, connection)
};

const Emitted = {
  responded: (id, response)   => makeEmitAction(Actions.RESPONDED, id, response)
};

module.exports = {
  ...Actions,
  ...Internal,
  ...Emitted
};
