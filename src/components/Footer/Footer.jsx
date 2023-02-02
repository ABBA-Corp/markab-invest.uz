import React from "react";
import "./Scss/Footer.scss"
import Logo from "../../assets/markab.png"

function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="footer">
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

export default Footer;
