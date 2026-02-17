import { useEffect } from "react";
import { createContext, useState } from "react";

const CartContext = createContext(null);
const url = "http://localhost:9005/api/cart/";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  useEffect(() => {
    getCart().then((data) => {
      if (data) {
        setCartItems(data.items);
        setTotal(data.total);
      }
    });
  }, []);

  async function getCart() {
    try {
      const resp = await fetch(url, {
        credentials: "include",
      });
      const data = await resp.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
