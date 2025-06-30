const { conection } = require("../config/database")

//Funcion Para Consultar Datos y Rol Del Usuario Para El Inicio De Sesion
const loginUsuario = (req, res) => {
  const { mail, pass } = req.body; //Desestructuración: Extrae los campos mail y pass (req.body), que se envían desde formulario

  const consulta = `
    SELECT usuarios.idUsuario, usuarios.nombre, usuarios.mail, roles.tipo 
    FROM usuarios 
    JOIN roles ON usuarios.idRol = roles.idRol 
    WHERE usuarios.mail = ? AND usuarios.pass = ?
  `;

  conection.query(consulta, [mail, pass], (error, results) => { //Ejecuta la consulta y Los valores [mail, pass] reemplazan los ? de la consulta de forma segura.

    if (results.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const usuario = results[0];

    res.json({ //Responde al cliente con un JSON que contiene los datos del usuario sin incluir la contraseña
      idUsuario: usuario.idUsuario,
      nombre: usuario.nombre,
      mail: usuario.mail,
      tipo: usuario.tipo 
    });
  });
};

//Funcion Para Crear Local
const crearUsuario = (req, res) => {  
  const { nombre,mail,tel, idRol, direccion, pass } = req.body;//Desestructuración: Extrae los campos mail y pass (req.body), que se envían desde formulario
  const consulta = "insert into usuarios (nombre,mail,tel, idRol ,direccion, pass ) values(?,?,?,?,?,?);"

  conection.query(consulta, [nombre,mail,tel, idRol, direccion, pass], (error, results) => { //Ejecuta la consulta y Los valores [entre corchetes] reemplazan los ? .
    if (error) res.status(500).send({ message: "algo salio mal" })

  })
  res.status(200).send({ message: "Usuario creado correctamente" });
}


module.exports = { loginUsuario,crearUsuario };