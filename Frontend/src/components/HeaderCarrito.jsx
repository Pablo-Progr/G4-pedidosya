import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import pedidosYa from "../img/logoPedidosYa.png";
import "../css/headercarrito.css"; 
const HeaderCarrito = () => {
  return (
    
      <div className="header-carrito">
        <Link to="/">
          <IoIosArrowBack className="icon-back"  />
        </Link>
        <img src={pedidosYa} alt="logo" />
      </div>
    
  );
};

export default HeaderCarrito;
