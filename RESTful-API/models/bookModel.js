const mongoose = require('mongoose');
const schema = mongoose.Schema;

const bookModel = new schema({
    title: {type: String},
    author: {type: String},
});

module.exports = mongoose.model('book', bookModel);