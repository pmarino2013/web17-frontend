import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchProductApp from "./SearchProductApp";
import CartBtnApp from "./cart/CartBtnApp";

const NavBarApp = () => {
  const togleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold">
                MiTienda
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Inicio
              </NavLink>
              <NavLink
                to="/productos"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Productos
              </NavLink>
              <NavLink
                to="/sobre-nosotros"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Sobre Nosotros
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <NavLink
              to="/perfil"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Perfil
            </NavLink>
            <SearchProductApp />
            <CartBtnApp />
          </div>
          {/* mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={togleMenu}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/productos"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Productos
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Sobre Nosotros
          </NavLink>
          <NavLink
            to="/perfil"
            className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Perfil
          </NavLink>
          <SearchProductApp />
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
