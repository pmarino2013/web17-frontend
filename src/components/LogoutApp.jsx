import React from "react";
// import { logOut } from '../helpers/auth'
import { useNavigate } from "react-router-dom";

const LogoutApp = () => {
  const navigate = useNavigate();

  const cerrarSesion = async () => {
    // const response=await logOut()
    // if(response.ok){
    // navigate('/')
    // }
  };
  return (
    <div>
      <button
        className="mt-3 relative px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 active:scale-95 focus:outline-none animate-fade-in
        before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:transition-opacity"
        style={{ transition: "background 0.3s, box-shadow 0.2s" }}
        onClick={cerrarSesion}
      >
        <span className="drop-shadow glow">Cerrar Sesión</span>
      </button>
    </div>
  );
};

export default LogoutApp;
