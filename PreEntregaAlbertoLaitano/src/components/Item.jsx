import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const Item = ({item}) => {
    const { addItem } = useContext(CartContext); // Accede al contexto
    const addToCart = () => {
        addItem(item, 1); // Llama a la función addItem con el artículo y la cantidad
    };

    return (

        <div className="col-md-3 text-center mb-4">
            <div className="card h-100">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.imagen} className="card-img-top" alt={item.alt} />
                    <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.color}</p>
                    </div>
                </Link> 
                <button className="btn btn-success mt-auto" onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item;
