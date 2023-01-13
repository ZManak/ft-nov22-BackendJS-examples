const manage404 = function (req, res, next) {
    let msj = "Ruta no encontrada"
    res.status(404).json(msj);
};

module.exports = manage404;