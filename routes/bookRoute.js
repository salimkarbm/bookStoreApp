const express = require('express')

const bookController = require('../controllers/bookController')

//initialize router
const router = express.Router()

router.route('/').post(bookController.createBook)

module.exports = router