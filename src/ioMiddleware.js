const ioMiddlware = () => store => next => action => {
  if (action.emit) {
    const id = action.id;
    const connections = store.getState().get('connections');
    const userData = connections.get(id);
    if (!userData) {
      console.log(`Missing connection data for ${id}`)
      return next(action)
    };

    const connection = userData.get('connection');
    connection.to(id).emit('action', {
      type: action.type,
      payload: action.payload
    });
  }
  return next(action);
};

module.exports = ioMiddlware;
