const express = require("express") // importo libreria express
const {conection} = require("./config/database")

const app = express() //Guardo la funcion de express en una variable

const PORT = 8000  //Guardo en variable el puerto que corre el localhost

app.use(express.json()) //tramsformo en json 





app.get("/", (resq, res) => {        //Hago peticion get para corroborar mi conexion
    res.send("Bienvenido a mi api")
})

//creo consulta por medio de la conexion a la BD
app.get("/usuarios", (req, res)=>{
    const consulta = "select * from usuarios"

    conection.query(consulta, (error, results) => {
        if (error) throw error
        //res.json(results)
        res.send(results)
    })
})

app.post("/productos/buscarProducto", (req, res) => {
    const nombreProducto = req.body.nombre

    let consultaProducto = "select * from productos where nombre=" + nombreProducto
    
    conection.query(consultaProducto, (error, results) => {
        if (error) throw error
        res.json(results)
    })

})

conection.connect((error) => { // realizo la conexion con la base de datos
    if (error) throw error
    console.log("Conectado a mi DB")
})

app.listen(PORT, () => {
    console.log("Escuchando el puerto " + PORT) //puerto de escucha
})












