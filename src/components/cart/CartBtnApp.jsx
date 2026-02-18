import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartModalApp from "./CartModalApp";
import CartApp from "./CartApp";

const CartBtnApp = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <button
        type="button"
        className="relative bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={showModal}
      >
        {/* icono de carrito (Heroicons) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19m-12 0a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>

        {total > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {total}
          </span>
        )}
      </button>
      {show && <CartModalApp onClose={hideModal} />}
    </>
  );
};

export default CartBtnApp;
