/* eslint-disable */
const Article = require("../models/article");
const Book = require("../models/book");
const Author = require("../models/author");
const book = require("../models/book");

module.exports = {
  Articles: async () => {
    return await Article.find();
  },
  createArticle: args => {
    //console.log(args.article.title, args.article.body);
    Article.create({ title: args.article.title, body: args.article.body }, (err, info) => {
      if (err) {
        console.log('error adding to db in resolvers/index/createArticle');
        throw err
      }
      console.log(info)

      return info
    })
  },
  Books: async () => {
    let fetched = await Book.find();
    console.log(fetched);
    return fetched;
  },
  Book: async (args) => {
    console.log(args)
    let fetched = await Book.findOne({ _id: args.book._id })
    return fetched;
  },
  createBook: args => {
    //console.log(args.book.title)
    Book.create({ title: args.book.title }, (err, info) => {
      return info
    })
  },
  Authors: async () => {
    return await Author.find({}, async (err, authors) => {
      // if (err) throw err;
      // const newData = [];
      // for (let i = 0; i < authors.length; i++) {
      //   const author = authors[i];
      //   const authorData = {}
      //   const booksData = [];
      //   for (let j = 0; j < author.books.length; j++) {
      //     const book = author.books[j];
      //     let bookInfo = await Book.findOne({ _id: book })
      //     booksData.push(bookInfo);
      //   }
      //   authorData._id = author._id
      //   authorData.firstName = author.firstName;
      //   authorData.lastName = author.lastName;
      //   authorData.books = booksData;
      //   newData.push(authorData)
      // }
      // console.log(newData[0].books)
      // return newData;
    })
  },
  Author: async (args) => {
    let fetched = await Author.findOne({ _id: args.Author._id })
    return fetched;
  }

}
