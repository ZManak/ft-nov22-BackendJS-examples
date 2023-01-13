const express = require('express');
const productsRouter = express.Router();

productsRouter.get('/:id?', (req, res) => {
    console.log(req.params); // Params
    if (req.params.id) {
        // LLamadas a la BBDD
        // para trar la noticia con ID adecuado
        res.send('Hey! te mando el producto número ' + req.params.id)
    }
    else {
        res.send('Ahí van los productos')
    }
})

module.exports = productsRouter;