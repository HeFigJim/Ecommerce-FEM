import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ItemsCount = ({ id, inCart }) => {
  const {
    handleAddItem,
    handleRemoveItem,
    cartItems,
    setTotalItems,
    totalItems,
  } = useContext(ProductContext);

  return (
    <div className="text-black w-full my-[16px] flex justify-between items-center rounded px-1 bg-[#F6F8FD]">
      <button
        type="button"
        className="text-[#FF7E1B]"
        onClick={() => {
          if (cartItems[id] > 0) {
            handleRemoveItem(id);
            if (inCart) {
              setTotalItems(totalItems - 1);
            }
          }
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <p className="mx-1">{cartItems[id]}</p>

      <button
        type="button"
        className="text-[#FF7E1B] h-6"
        onClick={() => {
          handleAddItem(id);
          if (inCart) setTotalItems((prev) => prev + 1);
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ItemsCount;
