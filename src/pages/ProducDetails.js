import React from "react";
import { useParams } from "react-router";
import ItemsCount from "../components/ItemsCount";
import { shoes } from "../data/shoeProducts";
import ShoppingCart from "../components/ShoppingCart";

const ProducDetails = () => {
  const { id } = useParams();

  const { title, description, img, price } = shoes[id - 1];

  return (
    <div className="mx-20 mt-8 lg:flex lg:justify-around">
      <div className="block md:w-1/3 md:mx-auto lg:mx-0">
        <img src={img} alt="Product Sneaker" />
      </div>
      <div className="w-full mt-4 lg:w-1/3 lg:-translate-x-20">
        <h2 className="text-[.6rem] font-mono-light">SNEAKER COMPANY</h2>
        <h3 className="text-xl  font-semibold">{title}</h3>
        <p className="text-xs font-light">{description}</p>

        <div className="flex justify-between items-center">
          <p>
            &#65284;{price}
            <span className="ml-1 text-[.6rem] text-orange-600 font-light bg-orange-200">
              50% OFF
            </span>
          </p>
          <h4 className="line-through text-sm">&#65284;{price * 2}</h4>
        </div>
        <ItemsCount id={id} isCart={false} />
        <ShoppingCart id={id} />
      </div>
    </div>
  );
};

export default ProducDetails;
