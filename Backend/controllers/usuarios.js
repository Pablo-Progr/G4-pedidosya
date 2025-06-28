const { conection } = require("../config/database")

const loginUsuario = (req, res) => {
  const { mail, pass } = req.body;

  const consulta = `
    SELECT usuarios.idUsuario, usuarios.nombre, usuarios.mail, roles.tipo 
    FROM usuarios 
    JOIN roles ON usuarios.idRol = roles.idRol 
    WHERE usuarios.mail = ? AND usuarios.pass = ?
  `;

  conection.query(consulta, [mail, pass], (error, results) => {
    if (error) {
      console.error("Error en la consulta:", error);
      return res.status(500).json({ mensaje: "Error en el servidor" });
    }

    if (results.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const usuario = results[0];
    res.json({
      idUsuario: usuario.idUsuario,
      nombre: usuario.nombre,
      email: usuario.email,
      tipo: usuario.tipo // acá recibís si es "admin" o "usuario"
    });
  });
};

module.exports = { loginUsuario };