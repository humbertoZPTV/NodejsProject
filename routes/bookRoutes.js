const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/add', bookController.addBook);
router.get('/', bookController.getAllBooks);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/title/:title', bookController.getBooksByTitle);
router.get('/isbn/:isbn', bookController.getBookByISBN);
// Ruta para obtener un libro por su ISBN
router.get('/review/:isbn', bookController.getBookReview);
router.put('/review/:isbn', bookController.updateBookReviews);
router.delete('/review/:isbn/:reviewId', bookController.deleteBookReview);
module.exports = router;