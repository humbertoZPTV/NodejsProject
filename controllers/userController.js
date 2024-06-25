const axios = require('axios');

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const response = await axios.post('URL_API_REGISTER_USER', userData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const loginData = req.body;
    const response = await axios.post('URL_API_LOGIN_USER', loginData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addOrUpdateReview = async (req, res) => {
  try {
    const reviewData = req.body;
    const response = await axios.post('URL_API_ADD_OR_UPDATE_REVIEW', reviewData);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { isbn } = req.params;
    const response = await axios.delete(`URL_API_DELETE_REVIEW/${isbn}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  addOrUpdateReview,
  deleteReview
};