import React, { createContext, useEffect, useState } from "react";
import { shoes } from "../data/shoeProducts";

const ProductContext = createContext({});

const handleDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < shoes.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState(handleDefaultCart());
  const [totalItems, setTotalItems] = useState(0);

  const handleAddItem = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const handleRemoveItem = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    setTotalItems((prev) => prev - 1);
  };

  const handleCartTotal = () => {
    let total = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) total += cartItems[key];
    }
    setTotalItems(total);
  };
  const handleClearCart = () => {
    let emptyCart = {};
    for (const key in cartItems) {
      emptyCart[key] = 0;
    }
    setCartItem(emptyCart);
    setTotalItems(0);
  };

  useEffect(() => {}, [cartItems]);

  const contextValue = {
    cartItems,
    totalItems,
    handleAddItem,
    handleRemoveItem,
    handleCartTotal,
    handleClearCart,
    setTotalItems,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
