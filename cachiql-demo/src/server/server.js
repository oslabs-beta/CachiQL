/* eslint-disable */
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
//redis cache system 
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const Schema = require('./mongoSchema');

const {booksCompose} = require('./mongoSchema');
// Construct a schema, using GraphQL schema language

var schema = buildSchema(`
  type Query {
    firstName: String
    book: Book
  }
  type Book {
    id: Int
    title: String
    author: Author
    
  }
  type Author {
    id: Int
    firstName: String
    lastName: String
    books: [Book]
  }
`);


const root = {
  firstName: () => "ddd",
  books: booksCompose.find('findMany') 
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');
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

let counter = 0;
//added middleware cache 
app.get('/', (req, res, next) => {
  const {fetchedData} = req.params;
  client.get(fetchedData, (err, data) => {
    if (err) throw err;
    if(data) res.send(setResponse(fetchedData, data));
    else next();
  })
});

app.get('/counter', (req, res) => {
  let num = counter;
  res.locals.num = num;
  counter = 0;
  console.log(num);
  return res.status(200).json(res.locals.num)

});

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
        let fetched = await Book.find({ Author: author._id })
        counter += 1;
        //console.log(fetched)
        //adds fetched data to redis cache
        //fetchedData is a new key in the cache, set to expire @ 3600 = 1 hr savig the fetched data 
        client.setex(fetchedAuthor, 3600, fetched);
        return fetched;
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
        let fetched = await Author.findOne({ books: book._id })
        counter += 1;
        //console.log(counter)
        //adds fetched data to redis cache
        //fetchedData is a new key in the cache, set to expire @ 3600 = 1 hr savig the fetched data 
        client.setex(fetchedBooks, 3600, fetched);
        return fetched;
      }
    }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
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
        //adds fetched data to redis cache
        //fetchedData is a new key in the cache, set to expire @ 3600 = 1 hr savig the fetched data 
        client.setex(fetchedBook, 3600, fetched);
        return fetched;
      }
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of Books',
      //query db in resolve instead of returning the books object
      resolve: async () => {
        let fetched = await Book.find({});
        counter += 1;
        //adds fetched data to redis cache
        //fetchedData is a new key in the cache, set to expire @ 3600 = 1 hr savig the fetched data 
        client.setex(fetchedBookAll, 3600, fetched);
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
      resolve: async () => {
        let fetched = await Author.find({});
        counter += 1;
        //adds fetched data to redis cache
        //fetchedData is a new key in the cache, set to expire @ 3600 = 1 hr savig the fetched data 
        client.setex(fetchedAuthorAll, 3600, fetched);
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
  graphiql: true
}))

const uri = 'mongodb+srv://cachiql:cache@cachiql.pypfo.mongodb.net/cachiql?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, options)
  .then(() => app.listen(3000, console.log('Server running with mongodb on 3000')))
  .catch(error => {
    throw error;
  });


  // const RootMutationType = new GraphQLObjectType({
//   name: 'Mutations',
//   description: 'Root Mutation',
//   fields: () => ({
//     addBook: {
//       type: BookType,
//       description: 'Add a Book',
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         authorid: { type: GraphQLNonNull(GraphQLInt) }
//       },
//       resolve: async (parent, args) => {
//         const statement = 'insert into books (name, authorid) values ($1, $2) returning *';
//         const values = [args.name, args.authorid];
//         const data = await db.query(statement, values);
//         return data.rows[0];
//       }
//     },
//     addAuthor: {
//       type: AuthorType,
//       description: 'Add an Author',
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) }
//       },
//       //change this to db query
//       resolve: async (parent, args) => {
//         // const author = { id: authors.length + 1, name: args.name };
//         // authors.push(author);
//         // return author;
//         const statement = 'insert into authors (name) values ($1) returning *';
//         const values = [args.name];
//         const data = await db.query(statement, values);
//         return data.rows[0];
//       }
//     }
//   })
// })
