import {expect} from 'chai';

import makeStore from '../../src/storeMaker';
import {INITIAL_STATE} from '../../src/core';

const mockWeb3 = {
  personal: {
    unlockAccount: () => {}
  }
};

describe('storeMaker', () => {
  const store = makeStore(mockWeb3);
  it('makes a Redux store configured with the correct reducer', () => {
    expect(store.getState()).to.equal(INITIAL_STATE);
  });

});
