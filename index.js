const express = require('express');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});