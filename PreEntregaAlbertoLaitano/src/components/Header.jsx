import CartWidget from "./CartWidget";
import LogoMate from "./LogoMate";
import NavBar from "./NavBar"

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 my-1 text-start">
                    <LogoMate tamano={79}/>
                </div>
                <div className="col-md-8 my-3"> 
                    <NavBar />
                </div>
                <div className="col-md-2 my-3 text-end d-flex text-align-center">
                    <CartWidget tamano={25} />
                </div>
            </div>
        </div>
    )
}

export default Header;