const mysql = require("mysql2") //importo libreria sql


const conection = mysql.createConnection({ //Guardo en variable datos para ingresar a la BD
    host: "localhost",
    user: "pedidosya",
    password: "Pedidosya25",
    database: "pedidosya"
})


module.exports = { conection } //exporto mi conexion a la base de datos