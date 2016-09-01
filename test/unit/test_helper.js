import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import sinonStubPromise from 'sinon-stub-promise';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
chai.use(sinonChai);
chai.use(chaiAsPromised);
sinonStubPromise(sinon);
