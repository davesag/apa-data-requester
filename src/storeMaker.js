import {createStore, applyMiddleware, compose} from 'redux';
import { batchedSubscribe }    from 'redux-batched-subscribe';

import reducer                 from './reducer';
import ioMiddleware            from './ioMiddleware';
import actionHandlerMiddleware from './actionHandlerMiddleware';

import {INITIAL_STATE} from './core';

const makeStore = () => {
  const enhancer = compose(
    applyMiddleware(
      actionHandlerMiddleware(),
      ioMiddleware()
    ),
    batchedSubscribe(notify => notify())
  );

  return createStore(reducer, INITIAL_STATE, enhancer);
}

module.exports = makeStore;
