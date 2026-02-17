import React from "react";

const CartBtnApp = ({ count = 0, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      {count > 0 && (
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
};

export default CartBtnApp;
