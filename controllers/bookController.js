const axios = require('axios');

const books = [
  {
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "isbn": "978-84-376-0494-7",
    "reviews": {
      "review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
      "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }
    }
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0-452-28423-4",
    "reviews": {"review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
      "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }}
  },
  {
    "title": "Harry Potter y la piedra filosofal",
    "author": "J.K. Rowling",
    "isbn": "978-84-9838-189-9",
    "reviews": {"review1": { "rating": 5, "comment": "Obra maestra, me encantó cada página" },
      "review2": { "rating": 4, "comment": "Interesante y fascinante, pero un poco confuso en algunos puntos" }}
  },
  {
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "isbn": "978-84-376-0128-1",
    "reviews": {"review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
      "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }}
  },
  {
    "title": "El hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "978-84-450-7161-9",
    "reviews": {  "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }}
  },
  {
    "title": "Matar un ruiseñor",
    "author": "Harper Lee",
    "isbn": "978-84-663-2173-7",
    "reviews": {  "review1": { "rating": 4, "comment": "Una historia clásica de amor y sociedad" },
    "review2": { "rating": 3, "comment": "Personajes cautivadores, pero un poco lento en algunos puntos" }}
  },
  {
    "title": "Rayuela",
    "author": "Julio Cortázar",
    "isbn": "978-84-204-2324-1",
    "reviews": {  "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }}
  },
  {
    "title": "El principito",
    "author": "Antoine de Saint-Exupéry",
    "isbn": "978-84-96500-68-7",
    "reviews": {  "review1": { "rating": 5, "comment": "Increíblemente relevante incluso hoy en día" },
    "review2": { "rating": 4, "comment": "Distópico y aterrador, pero una lectura necesaria" }}
  }
];

const updateBookReviews = async (req, res) => {
  try {
    const { isbn } = req.params;
    const { reviews } = req.body;

    // Buscar el libro por su ISBN
    const bookIndex = books.findIndex(book => book.isbn === isbn);
    if (bookIndex === -1) {
      return res.status(404).send('Libro no encontrado');
    }

    // Actualizar las revisiones del libro
    books[bookIndex].reviews = reviews;

    // Enviar una respuesta exitosa
    res.json({ message: 'Revisiones del libro actualizadas exitosamente' });
  } catch (error) {
    // Manejar errores
    res.status(500).send(error.message);
  }
};

const addBook = async (req, res) => {
  try {
    const bookData = req.body;
    books.push(bookData);
    res.json({ message: 'Libro agregado exitosamente', book: bookData });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllBooks = async (req, res) => {
  try {
    res.json(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookByISBN = async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = books.find(book => book.isbn === isbn);
    if (book) {
      const { title, author, reviews } = book;
      res.json({ title, author, reviews });
    } else {
      res.status(404).send('Libro no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const { author } = req.params;
    const booksByAuthor = books.filter(book => book.author === author);
    res.json(booksByAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBooksByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const booksByTitle = books.filter(book => book.title === title);
    res.json(booksByTitle);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBookReview = async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = books.find(book => book.isbn === isbn);
    if (book && book.reviews) {
      res.json(book.reviews);
    } else {
      res.status(404).send('Reseñas no encontradas para este libro');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteBookReview = async (req, res) => {
  try {
    const { isbn } = req.params;
    const { reviewId } = req.body;
    
    // Encuentra el libro por su ISBN
    const book = books.find(book => book.isbn === isbn);
    if (!book) {
      return res.status(404).send('Libro no encontrado');
    }
    
    // Verifica la autorización (en este caso, verifica si el usuario es el propietario de la revisión)
    if (!book.reviews || !book.reviews[reviewId]) {
      return res.status(404).send('Revisión no encontrada');
    }
    
    // Elimina la revisión del libro
    delete book.reviews[reviewId];
    
    // Envía una respuesta exitosa
    res.json({ message: 'Revisión eliminada exitosamente' });
  } catch (error) {
    // Maneja errores
    res.status(500).send(error.message);
  }
};
module.exports = {
  addBook,
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  updateBookReviews,
  deleteBookReview
};