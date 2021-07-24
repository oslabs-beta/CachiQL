/*eslint-disable*/
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

class cache {
  constructor() {
    this.cache = {}
  }
  deleteCache() {
    this.cache = null;
  }
}

let authorCache = new cache;

let counter = 0;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book',
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLID) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: async (author) => {

        if (cached[author.id]) {
          console.log(author.id)
          console.log(cached[author.id])
          return cached[author.id];
        }
        else {
          let fetched = await Book.find({ Author: author._id })
          counter += 1;
          cached[author.id] = fetched
          console.log(cached)
          return fetched;
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
      resolve: async (book) => {
        console.log(authorCache.cache)
        if (authorCache.cache[book._id]) {
          authorCache.cache[book._id] = 
          console.log("the data is logged")
          console.log(authorCache.cache)
          return authorCache.cache[book._id]
        }
        else {
          let fetched = await Author.findOne({ books: book._id })
          counter += 1;
          authorCache.cache[book._id] = fetched
          return fetched;
        }

      }
    }
  })
})


module.exports = { AuthorType, BookType };