import IconoCarrito from "../assets/cart.svg"

const CartWidget = ({tamano}) => {
    return (
        <div>
             <button type="button" className="btn btn-success position-relative">
            <img src={IconoCarrito} alt="Icono Carrito de compras" width={tamano} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
            </span>
        </button>
        </div>      
    )
}

export default CartWidget;