/*eslint-disable */

const loader = (keys) => {
  return new Promise(keys) || new Error
}


class Cachiql {
  constructor(loader) {
    if (typeof loader !== 'function') {
      throw new Error(
        'Cachiql must have a function passed in as a parameter but received', loader
      )
    }
    this.loader = loader; // build  this function
    this.batch = null;
    // this.cacheKey = validateCacheKey();
    // this.cacheMap = validateMap();

  }

  load(key) { //key is a promise of the objectID
    if (key == null || key === undefined) { //check if the key is null or undefined
      throw new Error(
        'The key passed into the function is undefined please use valid key'
      )
    }

    const batch = getBatch(this) // create this function

    batch.keys.push(key); // add current key to the batch array
    const keyPromise = new Promise((resolve, reject) => {
      batch.cbs.push({ resolve, reject });
    })

    return keyPromise;
  }

  loadAll(keys) {
    if (!Array.isArray(keys)) {
      throw new Error(
        'The value passed into the loadAll() function is not an array'
      )
    }
    this.batch = null;
    console.log('this batch', this.batch)

    function removeDuplicates(data, key) {
      const arr = []
      data.forEach((el, i) => {
        let length = arr.length;
        let included = false
        for (let i = 0; i < length; i++) {
          if (el.toString() === arr[i].toString()) {
            included = true;
          }
        }
        if(!included) arr.push(el)
      })
      return arr;
    }

    const uniqueKeys = removeDuplicates(keys, item => item)

    const promiseLoader = [];
    for (let i = 0; i < uniqueKeys.length; i++) {
      promiseLoader.push(this.load(uniqueKeys[i]).catch(error => error));

    }

    sendBatch(this, this.batch);

    return Promise.all(promiseLoader);
  }


}

const batch = {
  hasSent: false,
  keys: [],
  cbs: [],
  cacheHits: []
}

const getBatch = (cachiql) => {
  cachiql.batch = batch;
  //sendBatch(cachiql, cachiql.batch)
  return batch;
}

const sendBatch = (cachiql, batch) => {
  batch.hasSent = true;
  console.log(batch.keys.length)

  if (batch.keys.length === 0) {
    console.log('i am in the return for the length issue in sendBatch')
    return;
  }

  const promisedBatch = cachiql.loader(batch.keys);

  if (!promisedBatch || typeof promisedBatch.then !== 'function') {
    throw new Error(
      'The cachiql class must be built with a function that takes an array and returns a promise'
    )
  }

  promisedBatch.then(data => {
    if (!Array.isArray(data)) {
      throw new Error(
        'The cachiql class must be built with a function that takes an array and returns a promise'
      )
    }

    if (data.length !== batch.keys.length) {
      throw new Error(
        'The batch object does not contain the correct length of keys'
      )
    }

    for (let i = 0; i < batch.cbs.length; i++) {
      let val = data[i];
      if (val instanceof Error) {
        batch.cbs[i].reject(val);
      }
      else {
        batch.cbs[i].resolve(val);
      }
    }
  }).catch(error => error)
}


module.exports = { Cachiql };