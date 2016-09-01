/*
  The global state is filtered for each connected socket, and each
  connection can be sent its own version of the state.

  TODO: In the future look at using http://jsonpatch.com to only emit diffs rather
  than the complete state.
*/

// I can use the _connectionId to customise the output on a per connection basis.
// this is not needed here however.
const stateFilter = (store, _connectionId) => {
  const state = store.getState();
  const connections = state.get('connections');

  return {
    connectionCount: !!connections ? connections.size() : 0
  };
};

module.exports = stateFilter;
