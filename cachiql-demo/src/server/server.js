/* eslint-disable */
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./schema');
const graphqlResolvers = require('./resolvers');
const mongoose = require('mongoose');

var app = express();

// The root provides a resolver function for each API endpoint

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

const uri = 'mongodb+srv://cachiql:cache@cachiql.pypfo.mongodb.net/cachiql?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, options)
  .then(() => app.listen(3000, console.log('Server running with mongodb on 3000')))
  .catch(error => {
    throw error;
  });

// app.listen(3000);
// console.log('Running a GraphQL API server at http://localhost:3000/graphql');
