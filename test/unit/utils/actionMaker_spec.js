import {expect} from 'chai';

import {makeAction, makeEmitAction} from '../../../src/utils/actionMaker';

describe('actionMaker', () => {
  const type = 'test-type';
  const payload = 'test-payload';

  describe('makeAction', () => {
    // (type, payload, emit = false)
    const expected = {
      type,
      payload,
      emit: false
    };

    it('makes an ordinary action', () => {
      expect(makeAction(type, payload)).to.deep.equal(expected);
    })

    it('makes an emit action', () => {
      expect(makeAction(type, payload, true)).to.deep.equal({...expected, emit: true});
    })
  });

  describe('makeEmitAction', () => {
    const id = 'test-id';

    it('makes an emit action with an id', () => {
      expect(makeEmitAction(type, id, payload)).to.deep.equal({type, payload, id, emit: true})
    });
  });
});
