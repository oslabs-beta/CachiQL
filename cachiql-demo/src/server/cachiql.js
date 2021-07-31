/*eslint-disable*/
// A function wich will return a promise
// INPUT: array of values
// OUTPUT: promise of arrays values or errors
const loader = (keys) => {
  return new Promise(keys) || new Error;
};


// Cachiql class which returns promises for each key and 
// removes unnecessary duplicates to minify the batch that needs
// to be queried by the database. Best used for large databases to 
// stop collecting the same data multiple times
// INPUT: Loader Function with an array of keys
// OUTPUT: minified Array of keys without duplicates
class Cachiql {
  constructor(loader) {
    //Error handler to check for the correct parameter type
    if (typeof loader !== 'function') {
      throw new Error(
        'Cachiql must have a function passed in as a parameter but received', loader
      );
    };
    // save variables for the function and the batch which will be returned
    this.loader = loader;
    this.batch = null;

  };

  // Creates a promise for each individual key and waits for a resolve or a reject
  // INPUT: a single key
  // OUTPUT: a promise for the key
  load(key) {
    // Error handling for unusable variable types
    if (key == null || key === undefined) {
      throw new Error(
        'The key passed into the function is undefined please use valid key'
      );
    };

    // Create or add to the batch to save both key and promise
    const batch = getBatch(this);

    // Add key to the instance of the batch and create the promise
    // for the key and add them to the batch to be checked later
    batch.keys.push(key);
    const keyPromise = new Promise((resolve, reject) => {
      batch.cbs.push({ resolve, reject });
    });

    // Return the key promise to bundle the promises
    return keyPromise;
  }

  // Removes any duplicates from the array of keys and 
  // creates a promise for each key and bundles them together to be resolved
  // INPUT: array of keys
  // OUTPUT: Array of Promises for each key
  loadAll(keys) {

    // Error Handling to check if the parameter is an array
    if (!Array.isArray(keys)) {
      throw new Error(
        'The value passed into the loadAll() function is not an array'
      )
    }

    // Checks if the batch is empty and if not clears it for
    // use in the following code
    if (this.batch !== null) clearBatch(this.batch)

    // Helper function to remove any duplicated keys from the array
    // INPUT: Array of keys sent by the user 
    // OUTPUT: Altered and minified array
    function removeDuplicates(data) {
      const arr = []
      data.forEach((el, i) => {
        let length = arr.length;
        let included = false
        for (let i = 0; i < length; i++) {
          if (el.toString() === arr[i].toString()) {
            included = true;
          }
        }
        if (!included) arr.push(el)
      })
      return arr;
    }

    const uniqueKeys = removeDuplicates(keys)

    // Running the load() function on each individual key in the array
    const promiseLoader = [];
    for (let i = 0; i < uniqueKeys.length; i++) {
      promiseLoader.push(this.load(uniqueKeys[i]).catch(error => error));

    }

    // Sending the new batch with all the added in promises and 
    // key values to the loader function
    sendBatch(this, this.batch);

    // Returns all the promises to be resolved later
    return Promise.all(promiseLoader);
  }


}


// Setup the batch object for use in the cachiql class
const batch = {
  hasSent: false,
  keys: [],
  cbs: [],
  cacheHits: []
}

// Clears the Batch of any data if having error with batching
// INPUT: The current batch that needs cleared 
// OUTPUT: the emptied batch 
const clearBatch = (batch) => {
  batch.hasSent = false;
  batch.keys = []
  batch.cbs = []
  cacheHits = []

}

// Setup the batch to save the data for the promises
// INPUT: the current cachiql instance
// OUTPUT: the newly created batch object
const getBatch = (cachiql) => {
  cachiql.batch = batch;
  return batch;
}

// Handles Errors with rejected promises and runs the loader function on the keys
// INPUT: the current instance of cachiql and the current batch
// OUTPUT: nothing to return just throwing errors for rejected data 
const sendBatch = (cachiql, batch) => {
  batch.hasSent = true;

  // Check to make sure the batch is loaded before running the loader function
  if (batch.keys.length === 0) {
    return;
  }

  // Run the loader function and save the data that is returned
  const promisedBatch = cachiql.loader(batch.keys);

  // Handle errors with the promisedBatch to make sure it in not null and function
  if (!promisedBatch || typeof promisedBatch.then !== 'function') {
    throw new Error(
      'The cachiql class must be built with a function that takes an array and returns a promise'
    )
  }

  // Checks the batch to see if the data returned is an array 
  promisedBatch.then(data => {
    if (!Array.isArray(data)) {
      throw new Error(
        'The data returned needs to be an array'
      )
    }

    // Compare lengths to make sure that the developer received 
    // the same amount of data that was called 
    if (data.length !== batch.keys.length) {
      throw new Error(
        'The batch object does not contain the correct length of keys'
      )
    }

    // Iterate through the array of data and handle resolves and rejects
    // Note: rejects should only return if the key did not query any data
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