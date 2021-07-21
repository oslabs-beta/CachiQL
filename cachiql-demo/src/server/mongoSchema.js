/* eslint-disable */
const mongoose = require('mongoose');
const dataBase ='mongodb+srv://cachiql:cache@cachiql.pypfo.mongodb.net/cachiql?retryWrites=true&w=majority';
const {composeWithMongoose} = require("graphql-compose-mongoose");

mongoose
  .connect(dataBase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: 'cachiql'
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    require: true
  }
});

const AuthorSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  }]
});

const books = mongoose.model("books", BookSchema);
const author = mongoose.model("authors", AuthorSchema);
const booksCompose = composeWithMongoose(books);
//module.exports = booksCompose = composeWithMongoose(books);
// module.exports = booksCompose;
//console.log(booksCompose)
module.exports = {
  books,
  author,
  booksCompose
}
