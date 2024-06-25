const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/isbn/:isbn', bookController.getBookByISBN);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/title/:title', bookController.getBooksByTitle);
router.get('/review/:isbn', bookController.getBookReview);

module.exports = router;