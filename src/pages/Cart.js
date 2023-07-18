import React from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { shoes } from "../data/shoeProducts";
import ItemsCount from "../components/ItemsCount";

const Cart = () => {
  const { cartItems, handleClearCart, totalItems } = useContext(ProductContext);
  let cartTotal = 0;

  const handleItemTotal = (price, id) => {
    let total = price * cartItems[id];
    cartTotal += total;
    return total;
  };

  return (
    <>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            {!!cartItems[shoe.id] && (
              <div className=" w-full my-6 flex items-center gap-4">
                <img src={shoe.img} alt="Sneaker" className="w-1/4 md:w-1/12" />
                <div className="w-full ">
                  <h2>{shoe.title}</h2>
                  <div className="flex justify-between items-center w-full ">
                    ${shoe.price} x {cartItems[shoe.id]}
                    <b className="ml-2 flex w-1/2 gap-8 ">
                      <ItemsCount id={shoe.id} inCart={true} />
                      <span className="w-full flex flex-row justify-end items-center">
                        &#36;{handleItemTotal(shoe.price, shoe.id)}
                      </span>
                    </b>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
        <li>
          {!totalItems && (
            <p className="w-full text-center text-4xl my-20">Empty Cart</p>
          )}
        </li>
      </ul>

      {!!totalItems && (
        <h3 className="w-full flex justify-end">
          <b>Total: ${cartTotal}</b>
        </h3>
      )}
      {!!totalItems && (
        <button
          type="button"
          className="w-full h-14 bg-[#FF7E1B] rounded-lg mb-4"
        >
          Check Out
        </button>
      )}
      {!!totalItems && (
        <button
          type="button"
          className="w-full h-14 justify-end bg-red-500 rounded-lg"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      )}
    </>
  );
};

export default Cart;
