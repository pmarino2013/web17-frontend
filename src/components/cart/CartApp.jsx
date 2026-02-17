import React, { useEffect, useState } from "react";
import { getCart } from "../../helpers/cart";
import PaymentBtnApp from "../PaymentBtnApp";

const CartApp = () => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  useEffect(() => {
    getCart().then((response) => {
      console.log(response);
      setCart({
        items: response.items,
        total: response.total,
      });
    });
  }, []);

  return (
    // crear una tarjeta de carrito con tailwindcss que muestre el nombre del producto, la cantidad y el precio total del carrito
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 p-5">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Carrito de compras
          </div>
          <ul className="mt-2 text-gray-500">
            {cart.items.map((item, index) => (
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
          <div className="mt-4 font-bold text-lg">Total: ${cart.total}</div>
        </div>
      </div>
      {cart.items.length > 0 && <PaymentBtnApp datos={cart} />}
    </div>
  );
};

export default CartApp;
