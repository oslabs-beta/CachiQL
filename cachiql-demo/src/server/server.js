/* eslint-disable */

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const path = require('path');
//import express from 'express';
//import { ApolloServer, gql } from 'apollo-server-express';
//import path from 'path';
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
};

const startApolloServer = async (typeDefs, resolvers) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();
  server.applyMiddleware({ app, path: '/' });

  app.get('/', (req, res) => {
    // eslint-disable-next-line no-undef
    res.status(200).sendFile(path.resolve(__dirname, '../src/client/index.html'));
  });

  await new Promise((resolve) => app.listen({ port: 3000 }, resolve));
  /*global console*/
  // eslint-disable-line no-console
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers);
