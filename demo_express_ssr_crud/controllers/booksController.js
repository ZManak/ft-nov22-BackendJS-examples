const postBook = (req, res) => {
    console.log("*******DATOS ENVIADOS*******");
    console.log(req.body);
    const { title } = req.body;
    res.status(201).json({ msj: `Creado libro: ${title}` });
}

const getBook = (req, res) => {
    res.status(200).send("Has mandado un GET!");
}

const deleteBook = (req, res) => {
    res.status(202).send("Has mandado un DELETE!");
}

const updateBook = (req, res) => {
    res.status(202).send("Has mandado un PUT!");
}

module.exports = {
    postBook,
    getBook,
    deleteBook,
    updateBook
}