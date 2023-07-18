import React from "react";
import ItemsCount from "../components/ItemsCount";
import { Link } from "react-router-dom";
import { shoes } from "../data/shoeProducts";
import ShoppingCart from "../components/ShoppingCart";

const Collections = () => {
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
        {shoes.map((shoe) => (
          <li key={shoe.id} className="">
            <Link key={shoe.id} to={`/${shoe.id}`}>
              <img src={shoe.img} alt="Shoe" className="w-full mx-auto" />
              <div className="w-full mx-auto">
                <h2 className="text-[.6rem] font-mono-light">
                  SNEAKER COMPANY
                </h2>
                <h3 className="text-lg lg:text-xl font-semibold whitespace-nowrap ">
                  {shoe.title}
                </h3>
                <p className="text-xs font-light">{shoe.description}</p>
                <div className="flex justify-between items-center">
                  <p>
                    &#65284;{shoe.price}
                    <span className="ml-1 text-[.6rem] text-orange-600 font-light bg-orange-200">
                      50% OFF
                    </span>
                  </p>
                  <h4 className="line-through text-sm">
                    &#65284;{shoe.price * 2}
                  </h4>
                </div>
              </div>
            </Link>
            <div>
              <ItemsCount id={shoe.id} inCart={false} />
              <ShoppingCart id={shoe.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
