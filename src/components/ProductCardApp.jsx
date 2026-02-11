import React from "react";

const ProductCardApp = ({ product }) => {
  const { img, precio, nombre } = product;
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100 flex flex-col w-50 h-80 p-2">
      {/* Imagen del producto - mismo tamaño para todas */}
      <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
        <img
          src={img}
          alt={nombre}
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-900 font-semibold text-lg text-center mb-2">
          {nombre}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-emerald-600">
            $
            {Number(precio).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCardApp;
