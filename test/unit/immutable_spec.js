// just a dummy test to prove that mocha etc is working

import {expect} from 'chai';
import {Map, List} from 'immutable';
import Faker from 'faker';

describe('immutability', () => {
  let words = [Faker.lorem.word(), Faker.lorem.word()];
  let newWord = Faker.lorem.word();

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('A List', () => {

    function addEntry(currentState, entry) {
      return currentState.push(entry);
    }

    it('is immutable', () => {
      let state = List(words);
      let nextState = addEntry(state, newWord);

      expect(nextState).to.equal(List(words.concat([newWord])));
      expect(state).to.equal(List(words));
    });
  });

  describe('a tree', () => {

    function addEntry(currentState, entry) {
      return currentState.update('entries', entries => entries.push(entry));
    }

    it('is immutable', () => {
      let state = Map({
        entries: List(words)
      });
      let nextState = addEntry(state, newWord);

      expect(nextState).to.equal(Map({
        entries: List(words.concat([newWord]))
      }));
      expect(state).to.equal(Map({
        entries: List(words)
      }));
    });

  });
});
