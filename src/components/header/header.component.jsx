import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
  <nav className="navigation">
    <div className="nav-content container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
