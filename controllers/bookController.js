const axios = require('axios');

const getAllBooks = async (req, res) => {
  try {
    const response = await axios.get('URL_API_GET_ALL_BOOKS');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookByISBN = (req, res) => {
  const { isbn } = req.params;
  axios.get(`URL_API_GET_BOOK_BY_ISBN/${isbn}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).send(error.message));
};

const getBooksByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const response = await axios.get(`URL_API_GET_BOOKS_BY_AUTHOR/${author}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBooksByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const response = await axios.get(`URL_API_GET_BOOKS_BY_TITLE/${title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookReview = async (req, res) => {
  try {
    const { isbn } = req.params;
    const response = await axios.get(`URL_API_GET_BOOK_REVIEW/${isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview
};