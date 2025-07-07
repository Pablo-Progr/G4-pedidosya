const { conection } = require('../config/database');

const buscarcategorias = (req, res) => {
    const consulta = "SELECT * FROM catproductos";

    conection.query(consulta, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
}

module.exports = {
    buscarcategorias
};


