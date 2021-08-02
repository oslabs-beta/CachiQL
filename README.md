# About CachiQL

![Alt text](./cachiql-demo/src/assets/smallCachiql.svg)

[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fcachiql)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Foslabs-beta%2FCachiQL)
[![GitHub Stars](https://img.shields.io/github/stars/oslabs-beta/CachiQL)](https://github.com/oslabs-beta/CachiQL/stargazers)
[![GitHub license](https://img.shields.io/github/license/oslabs-beta/CachiQL)](https://github.com/oslabs-beta/CachiQL/blob/dev/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/min/cachiql)

CachiQL is an ultra-lightweight library designed to batch and cache [graphql-js](https://github.com/graphql/graphql-js "GraphQL JS") queries to reduce calls to databases. Additionally, CachiQL is written in Javascript for use in Node.js.

Note that batching and caching multiple data requests is not novel to Javascript and Node.js. Additionally, the inspiration behind CachiQL is to deeply understand the implementation of [DataLoader](https://github.com/graphql/dataloader "DataLoader GitHub"), which was created by [Lee Byron](https://github.com/leebyron "Lee Bryon GitHub") at Facebook to solve the common N +1 issue of a naive GraphQL server. Our team’s purpose is not to replace DataLoader but rather, to help others understand the rationale behind DataLoader and create a simplified and lightweight NPM package.

## Installation

---

Install the CachiQL package using npm.

```JavaScript
npm install --save cachiql
```

Now in order to use CachiQL, create a new instance of CachiQL. Each instance is created for each request using a web server, such as [express](https://github.com/expressjs/express "Express GitHub").

Although CachiQL does not require any dependencies, this package requires a global Javascript run-time environment with ES6 Promise.

## How to Use CachiQL

---

Batch processing is the cornerstone of the functionality of the CachiQL package. Because GraphQL standardizes resolvers with a depth-first-search execution query, the issue of N+1 arises. Simply put, the server then executes multiple and unnecessary trips to the database, over-fetching to waste computing resources and bandwidth.

```JavaScript**_NOTE:_**
const cachiql = require(‘cachiql’);

const schema = new GraphQLSchema({
  query: RootQueryType
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
      authorLoader: new Cachiql(AuthorLoader),
      bookLoader: new Cachiql(BookLoader),
      cachedData: []
    }
  })
);

```

### Batching

---

The CachiQL class constructor includes a batch loader that takes in an array of keys and returns a promise for each key which eventually resolves to the return array of values or the promise is rejected.

A loader enables a load of individual values before executing the batch with all the included keys.

```JavaScript

const batchAuthors = async (ids) => {
  try {
    const authors = await Author.find({ _id: { $in: ids } });
    return authors;
  } catch (err) {
    throw new Error('There was an error getting the Authors');
  }
};

module.exports = batchAuthors;

const batchBooks = async (ids) => {
  try {
    const books = await Book.find({ _id: { $in: ids } });
    return books;
  } catch (err) {
    throw new Error('There was an error getting the Books');
  }
};

module.exports = batchBooks;

```

### Caching

---

CachiQL includes a memoized cache for the loads. Additionally, CachiQL further parses through the array of keys, removing duplicates. Finally, note that you can use application-level caches such as Redis. The idea behind CachiQL’s memoized cache is just not to repeat the same data in each request.

### CachiQL and GraphQL

---

The utility of CachiQL is to eliminate the depth-first search structure of GraphQL standard resolvers. In other words, CachiQL aims to solve the N+1 issue that a GraphQL server creates when new database requests are issued as fields are resolved.

In the example provided, using a GraphQL standard resolver, querying a database containing 16 books by three different authors means that submitting a singular deeply nested query issues 16 trips for the information. However, using CachiQL creates more efficiency by only making two round trips to the backend.

**_NOTE:_** The array of values needs to be the same length as the array of keys.
