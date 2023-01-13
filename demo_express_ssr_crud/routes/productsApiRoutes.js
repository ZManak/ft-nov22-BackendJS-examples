const express = require('express');
const productsApiRoutes = express.Router();
const checkApiKey = require("../middlewares/auth_api_key");
const fetch = require('node-fetch');

productsApiRoutes.get('/:id?', async (req, res) => {
    if (req.params.id) { // con ID
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.status(200).json(products); // respuesta de la API 1 producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    } else { // sin ID --> TODOS los products
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.status(200).json(products); // respuesta de la API todos los productos
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }
});

// POST http://localhost:3000/products
productsApiRoutes.post('/', checkApiKey, async (req, res) => {
    console.log("Esto es el console.log de lo que introducimos por postman", req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar

    // Líneas
    // para guardar
    // en una BBDD SQL o MongoDB

    let response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    let answer = await response.json(); // objeto de vuelta de la petición
    console.log("Este es el console.log de lo que devuelve la api", answer);

    res.status(201).json({
        msj: `Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`, "product": answer
    });
});

module.exports = productsApiRoutes;