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
const redis = require('redis');
const mCache = require('memory-cache');


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
        console.log(mCache.get(book.id))
        //console.log(mCache.get())
        if (mCache.get(book.id)) {
          console.log("the data is logged")
          console.log(mCache)
          return mCache.get(book.id)
        }
        else {
          let fetched = await Author.findOne({ books: book.id })
          counter += 1;
          mCache.put(book.id, fetched);
          console.log(mCache.get(book.id));
          return fetched;
        }

      }
    }
  })
})


module.exports = { AuthorType, BookType };