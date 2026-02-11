import React from "react";
import LogoutApp from "../components/LogoutApp";
import PaymentBtnApp from "../components/PaymentBtnApp";
import CartApp from "../components/CartApp";
import ProductListApp from "../components/ProductListApp";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl">Bienvenido!😎</h1>
      <p>Esta es la pantalla de inicio</p>
      <LogoutApp />
      {/* <CartApp /> */}
      <ProductListApp />
      {/* <PaymentBtnApp /> */}
    </div>
  );
};

export default HomeScreen;
