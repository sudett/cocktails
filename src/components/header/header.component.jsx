import React from "react";

import { Link } from "react-router-dom";

import {
  Navigation,
  NavigationContainer,
  LogoContainer,
  NavList,
  NavLink,
} from "./header.styles";

const Header = () => (
  <Navigation>
    <NavigationContainer>
      <Link to="/">
        <LogoContainer />
      </Link>
      <NavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </NavList>
    </NavigationContainer>
  </Navigation>
);

export default Header;
