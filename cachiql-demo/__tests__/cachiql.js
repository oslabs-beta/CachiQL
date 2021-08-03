/*eslint-disable*/
const { JsxEmit } = require('typescript');
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
    test('given a value the function should return a promise', async () => {
      const loader = new Cachiql(async keys => keys)
      const nullVal = null;


      expect(loader.load(1)).toBeInstanceOf(Promise);
      expect(loader.load('testString1')).toBeInstanceOf(Promise);
      expect(loader.load({ 1: 'TestObject' })).toBeInstanceOf(Promise);
      // expect(loader.load(nullVal)).toThrow(Error)

    })

    test('given a null value should return an error', async () => {
      const loader = new Cachiql(async keys => keys)
      const nullVal = null;
      //jest.fn

      //expect(await loader.load(nullVal)).toThrow('The key passed into the function is undefined please use valid key')

    })
  })

  describe('LoadAll() functionality', () => {
    it('Should return return a promise', async () => {
      const loader = new Cachiql(async keys => keys);

      const promise = loader.loadAll([1, 2, 3, 4, 5, 3, 4, 2, 3])
      expect(promise).toBeInstanceOf(Promise);
    })

    it('Should return no duplicates once promise is resolved', async () => {
      const loader = new Cachiql(async keys => keys);

      const clearBatch = (batch) => {
        batch.hasSent = false;
        batch.keys = [];
        batch.cbs = [];
      }

      const promise = loader.loadAll([1, 2, 3, 4, 5, 3, 4, 2, 3])
      expect(promise).toBeInstanceOf(Promise);
      expect(await promise).toEqual([1, 2, 3, 4, 5])
      clearBatch(loader.batch)
    })
  })

  describe('batch functionality', () => {
    it('Should show key value pairs in the batch', async () => {
      const batch = new Cachiql(async keys => keys);

      const clearBatch = (batch) => {
        batch.hasSent = false;
        batch.keys = [];
        batch.cbs = [];
      }

      batch.loadAll([1, 2, 3, 4, 5, 4, 3, 2, 1])
      expect(batch.batch.keys.length).toEqual(5);
      expect(batch.batch.hasSent).toEqual(true);
      clearBatch(batch.batch)
    })

    it('Should clear cache when called', () => {
      const loader = new Cachiql(async keys => keys);

      expect(loader.batch).toEqual(null)
    })
  })
})