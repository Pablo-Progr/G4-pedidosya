const { conection } = require("../config/database")

const getLocales = (req, res) => {

    const consulta = "select * from Locales"

    conection.query(consulta, (error, results) => {
        if (error) throw error
        res.send(results)
    })
}

const crearLocal = (req, res) => {

    const {nombre,direccion,idValoracion,imagen} = req.body

    const consulta = "insert into Locales (nombre,direccion,idValoracion,imagen) values(?,?,?,?);"

    conection.query(consulta,[nombre,direccion,idValoracion,imagen ]), (error, results) =>{
        if (error) throw res.status(500).send({message:"algo salio mal"})
        res.send({ message: "Local agregado correctamente" })
    }
}

module.exports = {getLocales,crearLocal}