const { conection } = require("../config/database")
//Funcion Para Traer Todos los locales
const getLocales = (req, res) => {

    const consulta = "select * from Locales"

    conection.query(consulta, (error, results) => {
        if (error) throw error
        res.send(results)
    })
}


//Funcion Para Borrar Local Atravez De Su ID
const deleteLocal = (req, res) => {
    const { id } = req.params
    const consulta = "delete from locales where idLocal=?"

    conection.query(consulta, [id], (error, results) => {
        if (error) throw error
        res.status(200).send({ message: "Local eliminado correctamente" })
    })
}

//Funcion Para Crear Local
const crearLocal = (req, res) => {
    const { nombre, direccion, imagen } = req.body;
    const consulta = "insert into Locales (nombre,direccion,imagen) values(?,?,?);"

    conection.query(consulta,[nombre,direccion,imagen ], (error, results) =>{
        if (error) res.status(500).send({message:"algo salio mal"})
           
    })
    res.status(200).send({ message: "Local agregado correctamente" });
}

//Funcion para Editar Local
const editarLocal = (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, imagen } = req.body;
  
    const consulta = "UPDATE locales SET nombre = ?, direccion = ?, imagen = ? WHERE idLocal = ?";
  
    conection.query (consulta, [nombre, direccion, imagen, id], (err, result) => {
      if (err) {
        console.error("Error al actualizar el local:", err);
        return res.status(500).json({ mensaje: "Error al actualizar el local" });
      }
      res.json({ mensaje: "Local actualizado correctamente" });
    });
  };

module.exports = { getLocales, deleteLocal, crearLocal, editarLocal}