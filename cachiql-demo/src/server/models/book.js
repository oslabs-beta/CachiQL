/*eslint-disable*/
const mongoose = require('mongoose');
const authorSchema = require('./book')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  Author: { type: mongoose.Schema.Types.ObjectId, ref: 'authours' }
})

module.exports = mongoose.model('books', bookSchema, 'books');