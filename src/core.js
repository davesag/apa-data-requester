/**
 *  Very very simple so far, just to get the process right.
 */
import {List, Map} from 'immutable';

export const INITIAL_STATE = Map(); // empty state

export function startLoadingData(state) {
  // trigger a server-side request for data.
  return Map({
    loading: true
  });
}

export function loadedData(state, data) {
  let newState = state.update('loading', loading => false);
  // populate the rest of the state from the data
  return newState;
}
