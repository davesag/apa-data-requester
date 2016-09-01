import {makeAction, makeEmitAction} from './utils/actionMaker';

const ActionList = [
   // These are emitted to the client.
  'CONNECTED', // special in that it holds the connection id in the payload.
  'RESPONDED', // not yet defined.

  // These are received from the client.
  // There is no need to make an action for them but you might make a handler
  'REQUEST',

  // Internal use.
  'DISCONNECTED' // dispatched when a client disconnects
];
const Actions = ActionList.reduce((acc, elem) => { acc[elem] = elem; return acc; }, {});

const Internal = {
  disconnected: (connection) => makeAction(Actions.DISCONNECTED, connection)
};

const Emitted = {
  connected: (id, connection) => makeEmitAction(Actions.CONNECTED, {id, connection}),
  responded: (id, response)   => makeEmitAction(Actions.RESPONDED, {id, response})
};

module.exports = {
  ...Actions,
  ...Internal,
  ...Emitted
};
