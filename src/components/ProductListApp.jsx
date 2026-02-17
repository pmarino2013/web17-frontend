import React, { useEffect, useState } from "react";
import { getProducts } from "../helpers/product";
import ProductCardApp from "./ProductCardApp";

const ProductListApp = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    getProducts(5, pagina).then((data) => {
      setProducts(data.productos);
      setTotal(data.total);
    });
  }, [pagina]);

  const nextPage = () => {
    if (pagina + 5 < total) {
      setPagina(pagina + 5);
    }
  };

  const prevPage = () => {
    if (pagina - 5 >= 0) {
      setPagina(pagina - 5);
    }
  };

  return (
    <div>
      <h1>Lista de productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-3 ">
        {products.map((product) => (
          <ProductCardApp key={product._id} product={product} />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className={`bg-blue-700 p-2 text-amber-50 rounded-md hover:bg-blue-900 ${pagina - 5 < 0 ? " opacity-50 cursor-not-allowed" : ""}`}
          onClick={prevPage}
          disabled={pagina - 5 < 0}
        >
          <span>{"<<<"}</span>
        </button>
        <button
          className={`bg-blue-700 p-2 text-amber-50 rounded-md  hover:bg-blue-900 ${pagina + 5 >= total ? " opacity-50 cursor-not-allowed" : ""}`}
          onClick={nextPage}
          disabled={pagina + 5 >= total}
        >
          <span>{">>>"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductListApp;
