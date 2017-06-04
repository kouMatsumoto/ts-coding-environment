import * as assert from 'assert';
import { myFunc } from '../index';


describe('Test of this project', () => {
  describe('#test of myFunc()', () => {
    it('should return hello', () => {
      assert.equal(myFunc(), 'hello!');
    });
  });
});
