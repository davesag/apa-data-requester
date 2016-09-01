import {expect} from 'chai';
import convertActionTypeToHandlerName from '../../../src/utils/convertActionTypeToHandlerName';

describe('convertActionTypeToHandlerName', () => {

  const examples = {
    CONVERT_THIS: 'convertThis',
    WHATEVER: 'whatever'
  }

  const testConversion = (example) => {
    it(`converts ${example} to ${examples[example]}`, () => {
      expect(convertActionTypeToHandlerName(example)).to.equal(examples[example]);
    });
  }

  Object.keys(examples).forEach(example => testConversion(example));

});
