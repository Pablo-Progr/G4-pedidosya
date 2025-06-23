const { conection } = require("../config/database")

const getProductos = (req, res) => {

    const consulta =  "select * from productos;"
    conection.query(consulta, (error, results) => {
        if (error) throw error
        res.json(results)
    })
}

const getProducto = () => {

}

const deleteProducto = () => {

}

const updateProducto = () => {
    
}


module.exports = {getProductos ,getProducto, deleteProducto}