import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
       <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2  align-items-start">
                    <img src={item.imagen} alt={item.alt} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.nombre}</h1>
                    <p>{item.categoria}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
       </div>
    )
}

export default ItemDetail;