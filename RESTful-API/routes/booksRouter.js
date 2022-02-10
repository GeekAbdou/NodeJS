const express = require('express');

const bookRouter = express.Router();
const Book = require('../models/bookModel');

bookRouter.route('/').get((req,res) => {
    res.send('test routes');
});


module.exports = bookRouter;