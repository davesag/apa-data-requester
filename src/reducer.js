import {List} from 'immutable';
import {startLoadingData, loadedData, INITIAL_STATE} from './core';
import {Actions} from './actions';

export default function reducer(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch (action.type) {
  case Actions.DATA_LOAD:
    return startLoadingData(state);
  case Actions.DATA_LOADED:
    return loadedData(state, action.data);
  }
  return state;
}
