/*eslint-disable*/
const mongoose = require('mongoose');
const authorSchema = require('./book')

const Schema = mongoose.Schema;
//Creates a schema for every instance of a book
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  //Author references author from the Author table in database.
  Author: { type: mongoose.Schema.Types.ObjectId, ref: 'authours' },
  date_created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('books', bookSchema, 'books');