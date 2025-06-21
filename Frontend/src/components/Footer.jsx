import dataFiscal from '../img/dataFiscal.png'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row border-bottom">
          <div className="col d-flex flex-column">
            <a href="">Sobre Pedidos Ya</a>

            <a href="">Terminos y Condiciones</a>

            <a href="">Privacidad</a>
          </div>
          <div className="col d-flex flex-column ">
            <a href="">Top Comidas</a>

            <a href="">Top cadenas</a>

            <a href="">Top Ciudades</a>
          </div>
          <div className="col d-flex flex-column">
            <a href="">Resitra Tu Negocio</a>

            <a href="">Centro de Socios</a>
          </div>
          <div className="col d-flex flex-column">
            <a href="">PedidosYa para tus colaboradores</a>
          </div>
        </div>
        <div className="row border-bottom">
          <p>Libro de Quejas Online</p>
          <p>Te arrepientes de una compra?</p>
          <p>Defensa de Los Consumidores. </p>
          <p>Ley Nº 24.420 de Defensa del Consumidor.</p>
        </div>
        <div className="row border-bottom">
          <div className="col d-flex flex-column">
            <p>
              DELIVERY HERO E-COMMERCE S.A. CUIT: 30-71198576-6 | Av. del
              Libertador 7208, piso 20, Ciudad Autónoma de Buenos Aires |
            </p>
            <p>Para notificaciones legales y oficios: </p>
            <p>PedidosYa © 2010-2025</p>
          </div>
          <div className="col d-flex  justify-content-end">
            <img src={dataFiscal} alt="" style={{ width: "50px", height:"70px" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
