import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assests/logo.png";
import "./header.styles.scss";

const Header = (currentUser) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} width="120" height="60" alt="Logo digimon" />
    </Link>
    <div className="options">
      <Link className="option" to="/tarea">
        TAREA
      </Link>
      <Link className="option" to="/digimons">
        DIGIMONS
      </Link>
    </div>
  </div>
);

export default Header;
