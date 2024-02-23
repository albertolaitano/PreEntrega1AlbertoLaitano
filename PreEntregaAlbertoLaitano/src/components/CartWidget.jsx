import { useContext } from "react";
import IconoCarrito from "../assets/cart.svg"
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({tamano}) => {
    const {CantTotalProductos} = useContext(CartContext)

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className="btn btn-success position-relative">
            <img src={IconoCarrito} alt="Icono Carrito de compras" width={tamano} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{CantTotalProductos()}</span>
        </Link> : ""      
    )
}

export default CartWidget;