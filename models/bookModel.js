const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  discription: String,
  category: String,
  purchaseCount: Number,
  imageUrl: String,
  tags: Array,
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
