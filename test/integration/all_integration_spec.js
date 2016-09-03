import {expect} from 'chai';
import request  from 'supertest';

import {start} from '../../src/server';

describe('Integration tests', function() {
  let io, server, store, state;

  before(function(done) {
    this.timeout(60000);
    start().then((data) => {
      console.log('started!');
      io     = data.io;
      server = data.server;
      store  = data.store;
      done();
    }, done).catch(done);
  });

  beforeEach(() => {
    state = store.getState().toJS();
  });

  after(() => {
    io.close();
    server.close();
  });

  describe('Before there is any data', () => {
    // get root
    it("responds to get => '/'", (done) => {
      request(server)
        .get('/')
        .expect(200)
        .end(done);
    });

    describe('Initial state', () => {

      it('includes map of connections', () => {
        expect(state).to.have.property('connections');
      });

    })
  });

});
