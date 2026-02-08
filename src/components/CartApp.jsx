import React, { useEffect, useState } from "react";
import { getCart } from "../helpers/cart";

const CartApp = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then((response) => {
      console.log(response);
    });
  }, []);

  return <div>CartApp</div>;
};

export default CartApp;
