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
  const { idUsuario } = req.params;

  const sql = `
    SELECT c.*, p.nombre, p.precio AS precio_unitario
    FROM carrito c
    JOIN productos p ON c.idProducto = p.idProducto
    WHERE c.idUsuario = ?
  `;

  conection.query(sql, [idUsuario], (err, resultados) => {
    if (err) {
      console.error("Error al obtener el carrito del usuario:", err);
      return res.status(500).json({ error: "Error interno" });
    }

    res.json(resultados);
  });
};

const confirmarCompra = (req, res) => {
  const { idUsuario, aclaracion, metodoPago } = req.body;
  const fechaActual = new Date();

  const queryCarrito = `
  SELECT c.*, p.precio AS precio_unitario
  FROM carrito c
  JOIN productos p ON c.idProducto = p.idProducto
  WHERE c.idUsuario = ?
`;
  conection.query(queryCarrito, [idUsuario], (err, productos) => {
    if (err) return res.status(500).json({ error: "Error al consultar el carrito" });

    if (productos.length === 0) {
      return res.status(400).json({ error: "El carrito está vacío" });
    }

    const valores = productos.map((p) => [
      fechaActual,
      p.cantidad,
      idUsuario,
      p.idProducto,
      aclaracion,
      p.cantidad * p.precio_unitario,
      metodoPago,
    ]);

    const insertQuery = `
      INSERT INTO pedidos (fecha, cantidad, idUsuario, idProducto, aclaracion, total, metodoPago)
      VALUES ?
    `;

    conection.query(insertQuery, [valores], (err) => {
      if (err) return res.status(500).json({ error: "Error al insertar en recibos" });

    conection.query("DELETE FROM carrito WHERE idUsuario = ?", [idUsuario]);

      res.json({ mensaje: "Compra registrada con éxito" });
    });
  });
};

module.exports = {
  crearCarrito,
  obtenerCarritos, confirmarCompra,
  obtenerCarritoPorUsuario
};
