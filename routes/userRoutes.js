const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/review', userController.addOrUpdateReview);
router.delete('/review/:isbn', userController.deleteReview);

module.exports = router;