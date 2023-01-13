const express = require('express');
const cowsay = require('cowsay');
const manage404 = require("./middlewares/error404")
const calculator = require('./utils/calculator');

//import {  } from "module"; no se pueden mezclar estas formas de importación

//Rutas - importar
const booksRouter = require("./routes/booksRoutes");
const productsApiRouter = require("./routes/productsApiRoutes");
const productsRoutes = require('./routes/productsRoutes');

const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Habilitar tipo de dato a recibir en el server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//Check api key
//app.use(checkApiKey)

//Rutas
app.use("/books", booksRouter);
app.use("/product", productsRoutes)
app.use("/api/products", productsApiRouter)

app.get('/', (req, res) => {
    const calc = calculator.add(2, 2);
    //res.send(`Hello World! La suma es ${suma}`)
    res.render('content', { msj: "The Bridge", calc })
})

// http://localhost:3000/pokemon?a=1&b=2
// http://localhost:3000/pokemon
// http://localhost:3000/pokemon?aaaaaa=34
app.get('/pokemon', (req, res) => {
    console.log(req.query);
    const { a, b } = req.query; // Query params
    console.log(a, b)
    if (a && b) {
        const calc = calculator.sub(a, b);
        //res.send(`Ahí va pikachu! ${a}-${b} es ${resta}`)
        const msj2 = `de ${a}-${b}`
        // leer pokemons de la BBDD
        const pokemons = ['Bulbasur', 'Pikachu', 'Charmander', 'Ditto'];
        res.render('content', { msj: 'Ahí va pikachu!', msj2, calc, pokemons })
    }
    else {
        res.send(`Ahí va pikachu!`)
    }
})

// CRUD --> CREATE, READ, UPDATE, DELETE

// http://localhost:3000/books
// CREATE - crear un libro

// JSON del libro a enviar a POST /books
/*
{
    "title": "Don Quijote de la Mancha",
    "year": 1605,
    "description": "En un lugar de la mancha..."
}
*/


app.get('/content', function (req, res) {
    res.render('content');
});



//Router - enrutamiento automatizado

app.use(manage404); //error para rutas no encontradas

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `on port http://localhost:${port}. Que tenga un buen día.`,
            e: "oO",
            T: "U "
        }))
})

/*Objeto de prueba para crear*/
/*
{
    "title": "Barritas de tomate",
    "price": 1.2,
    "description": "Your perfect barrita de tomate in plaza mayor",
    "category": "food",
    "image": "https://estoyhechouncocinillas.com/wp-content/uploads/2015/08/tostadas_con_tomate.png"
}
*/

// POST http://localhost:3000/products
/*app.post('/products', async (req, res) => {
    console.log("Esto es el console.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
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
    console.log("Este es el console.log de lo que devuelve la api",answer);

    res.status(201).json({msj:`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`});
});*/
