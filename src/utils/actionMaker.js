const makeAction = (type, payload, emit = false) => {
  return {
    type,
    payload,
    emit
  }
};

const makeEmitAction = (type, id, payload) => {
  const action = makeAction(type, payload, true);
  return {
    ...action,
    id
  }
};

module.exports = {
  makeAction,
  makeEmitAction
};
