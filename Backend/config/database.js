const mysql = require("mysql2") //Importo Libreria Sql


const conection = mysql.createConnection({ //Guardo En Variable Datos Para Ingresar a La BD
    host: "localhost",
    user: "pedidosya",
    password: "Pedidosya25",
    database: "pedidosya3"
})


module.exports = { conection } //Exporto Mi Conexion a La Base De Datos