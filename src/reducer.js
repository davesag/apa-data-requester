import {Map} from 'immutable';
import {INITIAL_STATE} from './core';
import * as Actions from './actions';

const reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch (action.type) {
    case Actions.CONNECTED: {
      const connections = state.get('connections');
      const userData = Map({
        connection: action.payload.connection
      });
      const newConnections = connections.set(action.payload.id, userData); // not action.id
      return state.set('connections', newConnections);
    }
    case Actions.DISCONNECTED: {
      const connections = state.get('connections');
      const newConnections = connections.delete(action.id);
      return state.set('connections', newConnections);
    }
  }
  return state;
}

module.exports = reducer;
