/*eslint-disable*/
const { Cachiql } = require('../src/server/cachiql')

const testLoader = () => {
  const arr = []
  const loader = new Cachiql(keys => {
    arr.push(keys)
    return Promise.resolve(keys);
  });
  return [loader, arr];
}

describe('CachiQL', () => {
  describe('load() functionality', () => {
    it('should have a single value passed in', () => {
      const loader = new Cachiql(async keys => keys)

      const promise = loader.load(null);
      const promise1 = loader.load(undefined);
      const promise2 = loader.load([1]);
      expect(promise).toEqual('The key passed into the function is undefined please use valid key');
      expect(promise1).toEqual('The key passed into the function is undefined please use valid key');
      expect(promise2).toEqual('The key passed into the function is undefined please use valid key');

    })

    it('should return a promise of the given value', () => {

    })
  })

  describe('LoadAll() function', () => {
    it('Should return return a promise', async () => {
      const loader = new Cachiql(async keys => keys);

      const promise = loader.loadAll([1, 2, 3, 4, 5, 3, 4, 2, 3])
      expect(promise).toBeInstanceOf(Promise);
    })

    it('Should return no duplicates once promise is resolved', async () => {
      const loader = new Cachiql(async keys => keys);

      const promise = loader.loadAll([1, 2, 3, 4, 5, 3, 4, 2, 3])
      expect(promise).toBeInstanceOf(Promise);
      expect(await promise).toEqual([1, 2, 3, 4, 5])
    })
  })
})