import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { totalItems } = useContext(ProductContext);
  const [state, setState] = useState(false);

  return (
    <div className="flex flex-grow justify-between max-h-16 mt-2 border-b-2 pb-8 border-gray-300 relative">
      <div className="h-full flex items-center ">
        <button
          type="button"
          onClick={() => {
            if (window.innerWidth < 1440) setState(true);
          }}
          className="lg:hidden mt-2"
        >
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="text-white hover:text-lime-300"
          />
        </button>

        <Link to="/">
          <h1 className="text-4xl ml-3 lg:ml-0 lg:text-6xl leading-16 ">
            sneakers
          </h1>
        </Link>
      </div>

      <Nav state={state} setState={setState} />

      <div className="h-full flex items-center">
        <Link to="/cart" className="flex group hover:text-lime-300">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="xl"
            className="text-white group-hover:text-lime-300"
          />

          <div className="ml-2">{totalItems}</div>
        </Link>

        <img
          src="/images/image-avatar.png"
          alt="avatar"
          className="h-12 block mx-6"
        />
      </div>
    </div>
  );
};

export default Header;
