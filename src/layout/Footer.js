import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-40 text-center text-xs ">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-300 ml-1  hover:brightness-95"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://hefigjim.com"
        className="text-green-300 hover:brightness-95"
      >
        HeFigJim
      </a>
      .
    </div>
  );
};

export default Footer;
