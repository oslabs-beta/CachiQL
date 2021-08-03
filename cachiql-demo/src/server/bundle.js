// cachiql function
class cachiql {
  constructor() {
    this.bundle = [];
  }
// adds data to instance's bundle
  bundler(data) {
    this.bundle.push(data);
  }
// helper function iterates through fetched data and structures to an object if id matches
  debundle(fetchedData) {
    let organized = {}
    fetchedData.forEach(fetchedObj => {
      for (let i = 0; i < this.bundle.length; i++) {
        const arr = []
        const objectId = this.bundle[i];
        if(fetchedObj._id === objectId) organized[objectId] = arr.push(fetchedObj)
      }
    });
  }
}