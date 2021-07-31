/*eslint-disable*/

/**
 *  This function loader returns a singular promise
 * @param {*} keys Takes in an array of values
 * @returns A promise of values or errors
 */

const loader = (keys) => {
  return new Promise(keys) || new Error();
};

/**
 * The CachiQL class constructor returns promises for each key, 
removing unnecessary duplicates to minify the batch that needs
to be queried by the database. Best used for large databases to 
optimize collection of the same data multiple times.

INPUT: Takes in a loader function with an array of keys.
OUTPUT: Returns a minified array of keys without duplicate values.
 */

class Cachiql {
  constructor(loader) {
    //Error handling to ensure a function is entered.
    if (typeof loader !== 'function') {
      throw new Error(
        'Cachiql must have a function passed in as a parameter but received',
        loader
      );
    }
    //Save variables for the function and the batch
    this.loader = loader;
    this.batch = null;
  }

  /**
   * Creates a promise for each individual key and awaits for a resolve or a reject.
   * @param {*} key Takes in a single key
   * @returns Returns a promise for the singular key
   */

  load(key) {
    // Error handling for invalid variable types
    if (key == null || key === undefined) {
      throw new Error(
        'The key passed into the function is undefined please use valid key'
      );
    }

    // Create or add to the batch to save key and promise
    const batch = getBatch(this);

    // Add key to the instance of the batch and create the promise
    // Allows for the key to be added to the batch to be resolved or rejected at a later time
    batch.keys.push(key);
    const keyPromise = new Promise((resolve, reject) => {
      batch.cbs.push({ resolve, reject });
    });

    // Return the key promise to bundle the promises
    return keyPromise;
  }

  /**
   * Removes any duplicates from the array of keys and
   * creates a promise for each key by bundling together for eventual resolving
   *
   * @param {*} keys Takes in an array of keys
   * @returns Returns an array of promises for each key
   */

  loadAll(keys) {
    // Error Handling to ensure the parameter is an array
    if (!Array.isArray(keys)) {
      throw new Error(
        'The value passed into the loadAll() function is not an array'
      );
    }

    // Checks for an empty batch and if the batch is not empty, clears it.

    if (this.batch !== null) clearBatch(this.batch);

    /**
     * Helper function to remove duplicated keys from the array
     * @param {*} data Takes in an array of keys sent by the user
     * @returns Returns an altered and minified array
     */

    function removeDuplicates(data) {
      const arr = [];
      data.forEach((el, i) => {
        let length = arr.length;
        let included = false;
        for (let i = 0; i < length; i++) {
          if (el.toString() === arr[i].toString()) {
            included = true;
          }
        }
        if (!included) arr.push(el);
      });
      return arr;
    }

    const uniqueKeys = removeDuplicates(keys);

    // Runs the load() function on each individual key in the array
    const promiseLoader = [];
    for (let i = 0; i < uniqueKeys.length; i++) {
      promiseLoader.push(this.load(uniqueKeys[i]).catch((error) => error));
    }

    // Sends the new batch with all the additional promises and
    // key values to the loader function
    sendBatch(this, this.batch);

    // Returns all the promises to be resolved later
    return Promise.all(promiseLoader);
  }
}

//Creating a batch object for the CachiQL class

const batch = {
  hasSent: false,
  keys: [],
  cbs: []
};

/**
 * Clears the batch of data if an error occurs with batching
 * @param {*} batch Takes in the current batch that needs cleared
 */

const clearBatch = (batch) => {
  batch.hasSent = false;
  batch.keys = [];
  batch.cbs = [];
  cacheHits = [];
};

/**
 * Setup for the batch and saving data for the promises
 * @param {*} cachiql Takes in the current CachiQL instance
 * @returns Returns the newly created batch object
 *
 */

const getBatch = (cachiql) => {
  cachiql.batch = batch;
  return batch;
};

/**
 * Handles errors for rejected promises and runs the loader function on the keys
 * @param {*} cachiql Takes in the current instance of CachiQL and the current batch
 * @param {*} batch
 * @returns No return needed, unless errors are thrown for rejected data.
 */

const sendBatch = (cachiql, batch) => {
  batch.hasSent = true;

  // Check to ensure the batch is loaded before running the loader function
  if (batch.keys.length === 0) {
    return;
  }

  // Runs the loader function and saves returned data
  const promisedBatch = cachiql.loader(batch.keys);

  // Error handling of the promisedBatch
  if (!promisedBatch || typeof promisedBatch.then !== 'function') {
    throw new Error(
      'The cachiql class must be built with a function that takes an array and returns a promise'
    );
  }

  // Checks the batch to ensure that an array is returned
  promisedBatch
    .then((data) => {
      if (!Array.isArray(data)) {
        throw new Error('The data returned needs to be an array');
      }

      // Compare lengths that the developer received
      // the same amount of data that was called
      if (data.length !== batch.keys.length) {
        throw new Error(
          'The batch object does not contain the correct length of keys'
        );
      }

      // Iterate through the array of data and handle resolves and rejects
      // Note: rejects should only return if the key did not query any data
      for (let i = 0; i < batch.cbs.length; i++) {
        let val = data[i];
        if (val instanceof Error) {
          batch.cbs[i].reject(val);
        } else {
          batch.cbs[i].resolve(val);
        }
      }
    })
    .catch((error) => error);
};

module.exports = { Cachiql };
