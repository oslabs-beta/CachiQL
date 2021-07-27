/*eslint-disable*/
const mongoose = require('mongoose');
const bookSchema = require('./book')

const Schema = mongoose.Schema;
//Creates schema for every instance of an Author
authourSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  //Books references book from book table in databse
  books: [{ type: mongoose.Schema.Types.ObjectID, ref: 'books' }],
  date_created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Authour', authourSchema, 'authours');


