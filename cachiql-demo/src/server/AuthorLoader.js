/*eslint-disable */
const { Cachiql } = require('./cachiql');

const Author = require('./models/author');

// const formatResult = (authors, ids) => {
//   const authorMap = {};

//   authors.forEach(author => {
//     authorMap[author.id] = author;
//   });

//   return ids.map(id => authorMap[id]);
// }

// batches authors using ids. Returns Authors.
const batchAuthors = async (ids) => {
  try {
    const authors = await Author.find({ _id: { $in: ids } });
    //return formatResult(authors, ids);
    return authors;
  } catch (err) {
    throw new Error('There was an error getting the Authors');
  }
};

module.exports = batchAuthors;
