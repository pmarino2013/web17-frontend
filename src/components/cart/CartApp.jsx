import React, { useContext } from "react";
// import { getCart } from "../../helpers/cart";
import { CartContext } from "../../context/CartContext";
import PaymentBtnApp from "../PaymentBtnApp";

const CartApp = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    // crear una tarjeta de carrito con tailwindcss que muestre el nombre del producto, la cantidad y el precio total del carrito
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Carrito de compras
          </div>
          <ul className="mt-2 text-gray-500">
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between">
                  <span>
                    {item.producto.nombre} x {item.cantidad}
                  </span>
                  <span>${item.producto.precio * item.cantidad}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-lg">Total: ${total}</div>
        </div>
      </div>
      {cartItems.length > 0 && <PaymentBtnApp total={total} />}
    </div>
  );
};

export default CartApp;
