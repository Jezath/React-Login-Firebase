import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home/Home";
import { Singup } from "../components/Singup";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

export const MyRoutes = () => {

  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName)
      }else setUserName("");
    })
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home name={userName}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/singup" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  );
};
