import { Link, useNavigate} from "react-router-dom"
import { auth } from "../../firebase"

function salir () {
    return auth.signOut()
    navigate("/")
}

export const Home = (props) => {
    return(
        <div>
            <div>
                <div>
                    <h1>
                        <Link to="/login">Login</Link>
                    </h1>
                    <h1>
                        <Link to="/singup">Singup</Link>
                    </h1>
                </div>
            </div>
            <h2>{props.name?`Bienvenido - ${props.name}`:'Inicia sesión'}</h2>
            <button onClick={salir}>Cerrar sesión</button>
        </div>
    )
}