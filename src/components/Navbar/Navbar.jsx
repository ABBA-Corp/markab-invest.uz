import React from "react";
import Logo from "../../assets/markab.png";
import "./Scss/Navbar.scss"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="nav">
          <a href="/#">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <a href="tel:+998 95 860 95 55" className="tel">
            +998 95 860-95-55
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
