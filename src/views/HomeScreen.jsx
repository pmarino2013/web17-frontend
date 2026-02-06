import React from "react";
import LogoutApp from "../components/LogoutApp";
import PaymentBtnApp from "../components/PaymentBtnApp";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl">Bienvenido!😎</h1>
      <p>Esta es la pantalla de inicio</p>
      <LogoutApp />
      <PaymentBtnApp />
    </div>
  );
};

export default HomeScreen;
