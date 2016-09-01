import {responded} from '../actions';

const handler = (store) => action => {

  console.log('request received');
  // TODO: Do some stuff to actually handle it.

  const response = 'todo: do something here to make this real.'

  store.dispatch(responded(action.id, response));

};

module.exports = handler;
