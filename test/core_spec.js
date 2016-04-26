import {Map} from 'immutable';
import {expect} from 'chai';

import {startLoadingData, loadedData, INITIAL_STATE} from '../src/core';

describe('application logic', () => {
  const LOADING_STATE = Map({
    loading: true
  });
  const LOADED_STATE = Map({
    loading: false
  });

  describe('start loading data', () => {

    it('sets loading to true', () => {
      const nextState = startLoadingData(INITIAL_STATE);
      expect(nextState).to.equal(LOADING_STATE);
    });

  });

  describe('loaded data', () => {

    it('sets loading to false', () => {
      const nextState = loadedData(INITIAL_STATE);
      expect(nextState).to.equal(LOADED_STATE);
    });

  });

});
