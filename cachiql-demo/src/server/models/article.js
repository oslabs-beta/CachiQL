/*eslint-disable*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);