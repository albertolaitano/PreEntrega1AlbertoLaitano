import Logo from "../assets/logo-mate.png"

const LogoMate = ({tamano}) => {
 return (
    <img src={Logo} alt="Logo Mate" width={tamano} />
 )
}

export default LogoMate;