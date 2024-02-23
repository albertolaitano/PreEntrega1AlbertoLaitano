import BannerApp1 from "../assets/hombre-mate.webp";
import BannerApp2 from "../assets/mate-uru.webp";

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card h-100 d-flex flex-column">
                        <img src={BannerApp1} className="img-fluid"  alt="..." />
                        <div className="card-body text-center">
                            <h4>¡Un encuetro íntimo!</h4>
                            <p>Tomando un buen mate, uno se reencuentra consigo mismo, disfrutando del silencio y la compañía de nuestras propias reflexiones.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 d-flex flex-column">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>¡Mateando y Charlando!</h4>
                            <p>"Tomando mate con un amigo, se arma la ronda, se charla de la vida y se comparten los mejores momentos, ¡pura amistad y buena onda!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;