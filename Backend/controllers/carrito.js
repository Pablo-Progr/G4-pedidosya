const { conection } = require('../config/database');
// Registrar productos en el carrito (simula finalizar compra)
const crearCarrito = (req, res) => {
  const { productos } = req.body;

  if (!productos || !Array.isArray(productos) || productos.length === 0) {
    return res.status(400).json({ mensaje: "No se enviaron productos válidos" });
  }

  const valores = productos.map((p) => [p.idUsuario, p.idProducto, p.cantidad]);

  const consulta = "INSERT INTO carrito (idUsuario, idProducto, cantidad) VALUES ?";

    conection.query(consulta, [valores], (error, resultado) => {
    if (error) {
      console.error("Error al insertar en carrito:", error);
      return res.status(500).json({ mensaje: "Error al procesar el pedido" });
    }
    res.status(201).json({ mensaje: "Pedido registrado correctamente" });
  });
};

// Obtener todos los pedidos (carritos)
const obtenerCarritos = (req, res) => {
  const sql = "SELECT * FROM carrito";

  conection.query(sql, (error, resultados) => {
    if (error) {
      console.error("Error al obtener carritos:", error);
      return res.status(500).json({ mensaje: "Error al obtener carritos" });
    }
    res.json(resultados);
  });
};

const obtenerCarritoPorUsuario = (req, res) => {
    const idUsuario = req.params.idUsuario;
  
    const query = `
      SELECT c.idCarrito, p.idProducto, p.nombre, p.precio, c.cantidad
      FROM carrito c
      JOIN productos p ON c.idProducto = p.idProducto
      WHERE c.idUsuario = ?
    `;
  
    db.query(query, [idUsuario], (err, results) => {
        if (err) {
            console.error("Error al obtener carrito:", err);
            return res.status(500).json({ error: "Error del servidor" });
        }
  
        res.json(results);
    })
};

module.exports = {
  crearCarrito,
    obtenerCarritos,
    obtenerCarritoPorUsuario
}
