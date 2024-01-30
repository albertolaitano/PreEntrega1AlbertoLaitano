import { Link } from "react-router-dom";
import Logo from "../assets/logo-mate.png"

const LogoMate = ({tamano}) => {
 return (
   <Link to={"/"}>
      <img src={Logo} alt="Logo Mate" width={tamano} />
   </Link>
    
 )
}

export default LogoMate;