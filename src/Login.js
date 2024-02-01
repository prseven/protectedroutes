import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
const login = () =>{
    localStorage.setItem("login",true)
    navigate("/");
}
useEffect(()=>{
    let login = localStorage.getItem("login");
    if(login){
        navigate("/");
    }
    })


  return (
    <div className="text-center">
      <h1>Login</h1>
      <input type="text" />
      <br />
      <br />
      <button className="btn btn-danger" onClick={login} >Login</button>
    </div>
  );
}
