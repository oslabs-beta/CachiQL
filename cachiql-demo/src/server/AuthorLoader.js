/*eslint-disable */
const { Cachiql } = require('./cachiql');

const Author = require('./models/author');

const formatResult = (authors, ids) => {
  const authorMap = {};

  authors.forEach(author => {
    authorMap[author.id] = author;
  });

  return ids.map(id => authorMap[id]);
}

const batchAuthors = async (ids) => {
  try {
    console.log(ids)
    const authors = await Author.find({ _id: [ids] });
    console.log(authors)
    return formatResult(authors, ids);
  } catch (err) {
    throw new Error('There was an error getting the Authors');
  }
};

module.exports = () => new Cachiql(batchAuthors);