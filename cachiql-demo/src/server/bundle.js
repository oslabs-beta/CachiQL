
class cachiql {
  constructor() {
    this.bundle = [];
  }

  bundler(data) {
    this.bundle.push(data);
  }

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