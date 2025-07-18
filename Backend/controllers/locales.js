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
  const { id } = req.params // Extrae el id de los parámetros de la URL
  const consulta = "delete from locales where idLocal=?"

  conection.query(consulta, [id], (error, results) => { //Ejecuta la consulta con el valor del id.
    if (error) throw error
    res.status(200).send({ message: "Local eliminado correctamente" })
  })
}

//Funcion Para Crear Local
const crearLocal = (req, res) => {
  const { nombre, direccion, imagen, mail, propietario } = req.body;
  const consulta = "insert into Locales (nombre,direccion,imagen, propietario, mail) values(?,?,?,?,?);"

  conection.query(consulta, [nombre, direccion, imagen, propietario, mail], (error, results) => {
    if (error) res.status(500).send({ message: "algo salio mal" })

  })
  res.status(200).send({ message: "Local agregado correctamente" });
}

//Funcion para Editar Local
const editarLocal = (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, imagen, mail, propietario } = req.body;

  const consulta = "UPDATE locales SET nombre = ?, direccion = ?, imagen = ?, mail =? , propietario = ? WHERE idLocal = ?";

  conection.query(consulta, [nombre, direccion, imagen, mail, propietario, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar el local:", err);
      return res.status(500).json({ mensaje: "Error al actualizar el local" });
    }
    res.json({ mensaje: "Local actualizado correctamente" });
  });
};

//Funcion Para buscar Restaurante
const buscarLocales = (req, res) => {
  const { termino } = req.query; //Extrae el parámetro termino de los query params de la URL.

  const consulta = `
      SELECT * FROM Locales 
      WHERE nombre LIKE ? OR direccion LIKE ?
    `;

  const terminoBusqueda = `%${termino}%`;  //Prepara el valor que se va a reemplazar en los ? y Los símbolos % permiten que la búsqueda sea:"Cualquier cosa antes o después del término".

  conection.query(consulta, [terminoBusqueda, terminoBusqueda], (error, results) => {
    if (error) {
      console.error("Error al buscar locales:", error);
      return res.status(500).json({ mensaje: "Error en la búsqueda" });
    }

    res.json(results);
  });
};

const buscarlocalporpropietario = (req, res) => {
  const { idUsuario } = req.body;

  const consulta = " SELECT * FROM Locales WHERE idUsuario = ?;"


  conection.query(consulta, [idUsuario], (error, results) => {
    if (error) {
      console.error("Error al buscar locales:", error);
      return res.status(500).json({ mensaje: "Error en la búsqueda" });
    }

    res.json(results);
  });
};

module.exports = { getLocales, deleteLocal, crearLocal, editarLocal, buscarLocales, buscarlocalporpropietario }