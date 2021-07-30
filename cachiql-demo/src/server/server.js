/*eslint-disable*/

const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');
const Author = require('./models/author');
const Book = require('./models/book');
const app = express();
const cache = require('memory-cache');
const AuthorLoader = require('./AuthorLoader')
const BookLoader = require('./BookLoader')
const { Cachiql } = require('./cachiql')
//const {AuthorType, BookType} = require('./resolvercache')

let mockCounter = 0;
let counter = 0;

app.get('/counter', (req, res) => {
  let num = counter;
  res.locals.num = num;
  res.locals.mockNum = mockCounter
  counter = 0;
  console.log('count: ', num);
  return res.status(200).json([res.locals.num, res.locals.mockNum])

})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book',
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: async (author, _, context) => {
        if (context.cachedData.length === 0) {
          counter += 1;
          return await Book.find({ Author: author._id })
        }
        else {
          const arr = [];
          for (let i = 0; i < context.cachedData.length; i++) {
            const book = context.cachedData[i]
            for (let j = 0; j < author.books.length; j++) {
              const authBook = author.books[j];
              if (authBook.toString() === book._id.toString()) {
                arr.push(book);
              }
            }
          }
          if (arr.length !== author.books.length) {
            counter += 1
            return await Book.find({ Author: author._id })
          }
          setTimeout(() => console.log('timed out'), 0)

          return arr;
        }
      }
    }
  })
})

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    Author: {
      type: AuthorType,
      //need to change this to match db requirements
      resolve: async (book, _, context) => {

        if (context.cachedData.length === 0) {
          counter += 1
          return await Author.findOne({ books: book._id });
        }
        else {
          for (let i = 0; i < context.cachedData.length; i++) {
            const author = context.cachedData[i]
            for (let j = 0; j < author.books.length; j++) {
              const authBook = author.books[j];
              if (authBook.toString() === book._id.toString()) return author;

            }
          }
          counter += 1

          return await Author.findOne({ books: book._id });
        }
      }
    }
  })
})


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  context: () => console.log('hello'),
  fields: () => ({
    book: {
      type: BookType,
      description: 'A single Book',
      args: {
        id: { type: GraphQLID }
      },
      //db query instead to get this
      resolve: async (parent, args) => {
        let fetched = await Book.findById(args.id)
        counter += 1;
        return fetched;
      }
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of Books',
      //query db in resolve instead of returning the books object
      resolve: async (parent, other, context) => {
        //console.log(context.authorLoader)
        let fetched = await Book.find({});
        counter += 1;
        mockCounter += 1;
        let keys = [];
        fetched.forEach(key => keys.push(key.Author))
        console.log(context.cachedData)

        context.cachedData = await context.authorLoader.loadAll(keys)
        if (context.cachedData.length !== 0) {
          counter += 1;
        };
        mockCounter += keys.length
        console.log('mockCounter', mockCounter)
        setTimeout(() => context.cachedData = [], 0);
        return fetched;
      }
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        id: { type: GraphQLID }
      },
      //query db in resolve instead of returning the books object
      resolve: async (parent, args) => {
        counter += 1;
        return Author.findOne({ _id: args.id })
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all Authors',
      //query db in resolve instead of returning the books object
      resolve: async (parent, _, context) => {
        let fetched = await Author.find({});
        counter += 1;
        mockCounter += 1
        let keys = [];
        fetched.forEach(key => keys.push(...key.books))
        mockCounter += keys.length

        context.cachedData = await context.bookLoader.loadAll(keys)
        if (context.cachedData.length !== 0) {
          counter += 1;
        }

        console.log(mockCounter)
        return fetched;
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: RootQueryType,
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {
    authorLoader: new Cachiql(AuthorLoader),
    bookLoader: new Cachiql(BookLoader),
    cachedData: []
  },
}))

const uri = 'mongodb+srv://cachiql:cache@cachiql.pypfo.mongodb.net/cachiql?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, options)
  .then(() => app.listen(3000, console.log('Server running with mongodb on 3000')))
  .catch(error => {
    throw error;
  });

