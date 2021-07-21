/* eslint-disable */
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

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
