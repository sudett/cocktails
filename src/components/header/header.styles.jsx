import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../App.jsx";

import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navigation = styled.nav`
  background-color: #fff;
  box-shadow: var(--lightShadow);
  border-bottom: 2px solid var(--primaryColor);
`;

export const NavigationContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 30em) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Logo)`
  height: 1.8rem;
  width: 20rem;

  @media only screen and (max-width: 30em) {
    margin-top: 2rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  padding: 2rem 1.5rem;
  font-size: 1.7rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--offWhite);
  }
`;
