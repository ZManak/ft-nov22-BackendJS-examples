const express = require('express');
const productsRouter = express.Router();
const productControllers = require("../controllers/productsController")

productsRouter.get('/:id?', productControllers)

module.exports = productsRouter;