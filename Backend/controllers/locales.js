const { conection } = require("../config/database")

const getLocales = (req, res) => {

    const consulta = "select * from Locales"

    conection.query(consulta, (error, results) => {
        if (error) throw error
        res.send(results)
    })
}

const deleteLocal = (req, res) => {
    const { id } = req.params
    const consulta = "delete from locales where idLocal=?"

    conection.query(consulta, [id], (error, results) => {
        if (error) throw error
        res.status(200).send({ message: "Local eliminado correctamente" })
    })
}

const crearLocal = (req, res) => {
    const { nombre, direccion, imagen } = req.body;
    const consulta = "insert into Locales (nombre,direccion,imagen) values(?,?,?);"

    conection.query(consulta,[nombre,direccion,imagen ], (error, results) =>{
        if (error) throw res.status(500).send({message:"algo salio mal"})
           res.status(200).send({ message: "Local agregado correctamente" });
    })
    
}

module.exports = { getLocales, deleteLocal, crearLocal }