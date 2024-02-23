import { Link } from "react-router-dom";
import apuImg  from "../assets/apu.webp"

const Apu = () => {
    return (
        <Link to={"/"}>
            <img src={apuImg} alt="Logo Mate" width={300} />
        </Link>
    )  
}

export default Apu;