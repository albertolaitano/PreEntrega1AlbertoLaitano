const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                <div className="alert alert-danger p-3" role="alert">{mensaje}</div>
                </div>
            </div>
        </div>
        
    )
}

export default ItemListContainer