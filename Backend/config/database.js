const mysql = require("mysql2") //importo libreria sql


 const conection = mysql.createConnection({ //Guardo en variable datos para ingresar a la BD
    host: "localhost", 
    user: "root",
    password: "Mysqlblopa99",
    database:"pedidosya"
})


module.exports = {conection} //exporto mi conexion a la base de datos