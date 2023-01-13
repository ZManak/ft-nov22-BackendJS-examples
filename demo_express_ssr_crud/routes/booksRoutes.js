const express = require('express');
const booksRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key');
const bookControllers = require("../controllers/booksController")

// READ - leer un libro
booksRouter.get('/', checkApiKey, bookControllers.getBook)

//POST - añadir un libro
booksRouter.post('/', checkApiKey, bookControllers.postBook)

// UPDATE - actualizar un libro
booksRouter.put('/', checkApiKey, bookControllers.updateBook)

// DELETE - Borrar un libro
booksRouter.delete('/', checkApiKey, bookControllers.deleteBook)

module.exports = booksRouter;