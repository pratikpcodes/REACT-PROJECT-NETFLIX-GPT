import React from "react";
import netflixlogo from "../images/netflixlogo.png"
const Header = () => {
  return (
    <div className="absolute px-6 py-6 ml-6 mt-3 bg-gradient-to-b from-black-400 z-10" >
      <img className="w-44"
      src={netflixlogo} alt="non" />

    </div>
  );
};

export default Header;
