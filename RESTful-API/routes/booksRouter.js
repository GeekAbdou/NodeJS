const express = require("express");
const booksRouter = express.Router();
const Book = require("../models/bookModel");

booksRouter
  .route("/") // get all books
  .get((req, res) => {
    Book.find({}, (err, books) => {
      if (err) {
        res.sendStatus(400).json({ msg: "no books found" });
      }
      res.json(books);
    });
  })
  // add a book to bookStore DB
  .post((req, res) => {
    let book = new Book(req.body);
    book.save();
    res.status(201).json(book);
  });

  
module.exports = booksRouter;
