
import { Link, useNavigate } from 'react-router-dom';
import { InputControl } from './InputControl';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { async } from '@firebase/util';

export const Login = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({ email:"", pass:"" })
    const [errorMsg, setErrorMsg] = useState([]);
    const [submintButtonDisable, setSubmintButtonDisable] = useState(false);
    const iniciar = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Datos incompletos");
            return;
        }
        setErrorMsg("");
        setSubmintButtonDisable(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
            setSubmintButtonDisable(false);
            navigate("/");
        })
        .catch((err) => {
            setSubmintButtonDisable(false);
            setErrorMsg(err.message);
        });
    }

    return(
        <div>
            <div>
                <h1>Login</h1>

                <InputControl label="Email" onChange={(event) => setValues((prev) => ({...prev, email:event.target.value}))} placeholder="Ingrese correo" />

                <InputControl label="Contraseña" onChange={(event) => setValues((prev) => ({...prev, pass:event.target.value}))} placeholder="Ingrese contraseña" />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={iniciar} disabled={submintButtonDisable}>Login</button>
                    <p>Crear cuenta
                        <span>
                            <Link to="/singup"> Registrarse</Link>
                        </span>
                    </p>
                </div>

            </div>
        </div> 
    )
}