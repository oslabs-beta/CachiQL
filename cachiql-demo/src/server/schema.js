/*eslint-disable*/
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Book {
    _id: ID!
    title: String
    Author: ID!
  }

  type Author {
    _id: ID!
    firstName: String!
    lastName: String!
    books: [Book]
  }

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }

  input ArticleInput {
    title: String!
    body: String!
  }
  
  input BookInput {
    title: String!
  }

  type Query {
    Book: Book
    Author: Author
    Books: [Book]
    Authors: [Author]
    Articles: [Article]
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
    createBook(book:BookInput): Book
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
