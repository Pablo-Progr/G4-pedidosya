const { conection } = require("../config/database")

//Funcion Para Consultar Datos y Rol Del Usuario Para El Inicio De Sesion
const loginUsuario = (req, res) => {
  const { mail, pass } = req.body;

  const consulta = `
    SELECT usuarios.idUsuario, usuarios.nombre, usuarios.mail, roles.tipo 
    FROM usuarios 
    JOIN roles ON usuarios.idRol = roles.idRol 
    WHERE usuarios.mail = ? AND usuarios.pass = ?
  `;

  conection.query(consulta, [mail, pass], (error, results) => {

    if (results.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const usuario = results[0];
    res.json({
      idUsuario: usuario.idUsuario,
      nombre: usuario.nombre,
      mail: usuario.mail,
      tipo: usuario.tipo // acá recibís si es "admin" o "usuario"
    });
  });
};

//Funcion Para Crear Local
const crearUsuario = (req, res) => {
  const { nombre,mail,tel, idRol, direccion, pass } = req.body;
  const consulta = "insert into usuarios (nombre,mail,tel, idRol ,direccion, pass ) values(?,?,?,?,?,?);"

  conection.query(consulta, [nombre,mail,tel, idRol, direccion, pass], (error, results) => {
    if (error) res.status(500).send({ message: "algo salio mal" })

  })
  res.status(200).send({ message: "Usuario creado correctamente" });
}


module.exports = { loginUsuario,crearUsuario };