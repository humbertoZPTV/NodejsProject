// controllers/userController.js

const users = [
  {
    "username": "user1sadadas",
    "password": "password1",
    "email": "user1@example.com"
  },
  {
    "username": "user2fddfsdf",
    "password": "password2",
    "email": "user2@example.com"
  },
  {
    "username": "usersadadas3",
    "password": "password3",
    "email": "user3@example.com"
  }
]
; // Este es un arreglo en memoria para almacenar usuarios
const reviews = [
  {
    "isbn": "978-84-376-0494-7",
    "review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
    "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }
  },
  {
    "isbn": "978-0-452-28423-4",
    "review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
    "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }
  },
  {
    "isbn": "978-84-9838-189-9",
    "review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
    "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }
  },
  {
    "isbn": "978-84-376-0128-1",
    "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }
  },
  {
    "isbn": "978-84-450-7161-9",
    "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }
  },
  {
    "isbn": "978-84-663-2173-7",
    "review1": { "rating": 4, "comment": "Una historia clásica de amor y sociedad" },
    "review2": { "rating": 3, "comment": "Personajes cautivadores, pero un poco lento en algunos puntos" }
  },
  {
    "isbn": "978-84-204-2324-1",
    "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }
  },
  {
    "isbn": "978-84-96500-68-7",
    "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }
  }
]; // Este es un arreglo en memoria para almacenar reseñas

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    users.push(userData);
    res.json({ message: 'User registered successfully', user: userData });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addOrUpdateReview = async (req, res) => {
  try {
    const reviewData = req.body;
    const existingReviewIndex = reviews.findIndex(review => review.isbn === reviewData.isbn);
    if (existingReviewIndex > -1) {
      reviews[existingReviewIndex] = reviewData; // Actualizar la reseña existente
    } else {
      reviews.push(reviewData); // Añadir una nueva reseña
    }
    res.json({ message: 'Review added/updated successfully', review: reviewData });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { isbn } = req.params;
    const reviewIndex = reviews.findIndex(review => review.isbn === isbn);
    if (reviewIndex > -1) {
      reviews.splice(reviewIndex, 1);
      res.json({ message: 'Review deleted successfully' });
    } else {
      res.status(404).send('Review not found');
    }
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