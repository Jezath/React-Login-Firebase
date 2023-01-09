
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";
import { InputControl } from "./InputControl";

export const Singup = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submintButtonDisable, setSubmintButtonDisable] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmintButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(
      async (res) => {
        setSubmintButtonDisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/")
      })
      .catch((err) => {
        setSubmintButtonDisable(false)
        setErrorMsg(err.message)
      })
  };

  return (
    <div>
        <div>
            <h1>Registro</h1>

            <InputControl label="Nombre: " placeholder="Ingrese nombre" onChange={
                (event) => setValues((prev) => ({...prev, name:event.target.value}))
            }/>

            <InputControl label="Email: " placeholder="Ingrese correo" onChange={
                (event) => setValues((prev) => ({...prev, email:event.target.value}))
            }/>

            <InputControl label="Password: " placeholder="Ingrese contraseña" onChange={
                (event) => setValues((prev) => ({...prev, pass:event.target.value}))
            }/>

            <div>
                <b>{errorMsg}</b>
                <button onClick={registro} disabled={submintButtonDisable}>Registrarse</button>
                <p>
                    Si ya tienes cuenta inicia sesión: 
                    <span>
                        <Link to="/login"> Login</Link>
                    </span>
                </p>
            </div>

        </div>
    </div>
  );
};
