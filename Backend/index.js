const express = require("express") // importo libreria express
const {conection} = require("./config/database")

const app = express() //Guardo la funcion de express en una variable

const PORT = 8000  //Guardo en variable el puerto que corre el localhost

app.use(express.json()) //tramsformo en json 

app.get("/", (resq, res) => {        //Hago peticion get para corroborar mi conexion
    res.send("Bienvenido a mi api")
})



conection.connect((error) => { // realizo la conexion con la base de datos
    if (error) throw error
    console.log("Conectado a mi DB")
})

app.listen(PORT, () => {
    console.log("Escuchando el puerto " + PORT) //puerto de escucha
})












