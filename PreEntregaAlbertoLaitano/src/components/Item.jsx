import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (

        <div className="col-md-3 text-center">
            <div className="card">
                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                    <img src={item.imagen} className="card-img-top" alt={item.alt} />
                    <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.nombre}</p>
                    </div>
                </Link> 
                <button className="btn btn-success">Agregar al carrito</button>
            </div>
        </div>

    )
}

export default Item;
/*  <div className="col-md-3 text-center">
            <div className="card border-0">
                <img src={item.imagen} className="card-img-top" alt={item.alt} />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                    <button type="button" className="btn btn-success">Agregar al Carrito</button>
                </div>
            </div>
        </div> */