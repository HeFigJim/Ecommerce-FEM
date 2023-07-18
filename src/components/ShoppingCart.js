import React from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
const ShoppingCart = () => {
  const { handleCartTotal } = useContext(ProductContext);
  return (
    <button
      type="button"
      className="w-full rounded bg-[#FF7E1B] hover:text-blue-400"
      onClick={() => {
        handleCartTotal();
      }}
    >
      Add to cart
    </button>
  );
};

export default ShoppingCart;
