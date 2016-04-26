import {expect} from 'chai';

import makeStore from '../src/store';
import {INITIAL_STATE} from '../src/core';

describe('store', () => {
  const store = makeStore();

  it('is a Redux store configured with the correct reducer', () => {
    expect(store.getState()).to.equal(INITIAL_STATE);
  });

});
