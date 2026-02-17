import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search } from "../helpers/search";

const ProductSearchScreen = () => {
  const { termino } = useParams();
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    search(termino).then((resp) => setResultado(resp));
  }, [termino]);

  return <h1>Seacrh</h1>;
};

export default ProductSearchScreen;
