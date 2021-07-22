/*eslint-disable*/
const mongoose = require('mongoose');
const bookSchema = require('./book')

const Schema = mongoose.Schema;

authourSchema = new Schema({
  firstName: String,
  lastName: String,
  books: [{ type: mongoose.Schema.Types.ObjectID, ref: 'books' }],
})

module.exports = mongoose.model('Authour', authourSchema, 'authours');


//[{ type: mongoose.Schema.Types.ObjectID, ref: 'books' }]