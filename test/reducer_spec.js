import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

import {Actions} from '../src/actions';
import {startLoadingData, loadedData, INITIAL_STATE} from '../src/core';

describe('reducer', () => {

  it('has an initial state', () => {
    const nextState = reducer();

    expect(nextState).to.equal(INITIAL_STATE);
  });

  it('handles DATA_LOAD', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: Actions.DATA_LOAD
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      loading: true
    }));
  });

  it('handles DATA_LOADED', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: Actions.DATA_LOADED,
      data: 'test'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(Map({
      loading: false
    }));
  });

});
