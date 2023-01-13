const express = require('express');
const productsApiRoutes = express.Router();
const checkApiKey = require("../middlewares/auth_api_key");
const pApiControllers = require("../controllers/productsApiController")

productsApiRoutes.get('/:id?', pApiControllers.getApiProduct);

// POST http://localhost:3000/products
productsApiRoutes.post('/', checkApiKey, pApiControllers.postApiProduct);

module.exports = productsApiRoutes;