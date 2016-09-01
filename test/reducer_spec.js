import {Map, List, fromJS} from 'immutable';
import {expect} from 'chai';
import sinon from 'sinon';

import * as Actions from '../../src/actions';
import proxyquire from 'proxyquire';
proxyquire.noPreserveCache(); // see the proxyquire readme.

describe('reducer', () => {
  const INITIAL_STATE = Map();

  const coreStub = {
    INITIAL_STATE
  };

  let reducer = proxyquire('../../src/reducer', {
    './core': coreStub
  });

  it('has an initial state', () => {
    expect(reducer()).to.equal(INITIAL_STATE);
  });

  // describe('handling DATA_LOADED', () => {
  //   let loadedSpy;
  //   const data = {test: 'just a test'};
  //
  //   beforeEach(() => {
  //     const action = {
  //       type: Actions.DATA_LOADED,
  //       payload: data
  //     };
  //     loadedSpy = sinon.stub(coreStub, 'loadedData');
  //     reducer(INITIAL_STATE, action);
  //   });
  //
  //   afterEach(() => {
  //     coreStub.loadedData.restore();
  //   })
  //
  //   it('calls loadedData', () => {
  //     expect(loadedSpy).to.have.been.calledWith(INITIAL_STATE, data);
  //   });
  // });

});
