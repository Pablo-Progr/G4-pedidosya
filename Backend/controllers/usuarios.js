const { conection } = require("../config/database")

//creo consulta por medio de la conexion a la BD
app.get("/usuarios", (req, res) => {
    const consulta = "select * from usuarios"

    conection.query(consulta, (error, results) => {
        if (error) throw error
        //res.json(results)
        res.send(results)
    })
})