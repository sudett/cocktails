import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 85vw;
  margin: 0 auto;
`;

export const CenterContainer = styled.div`
  max-width: 60rem;
  margin: 8rem auto;
  /* text-align: center; */

  @media only screen and (max-width: 43.75em) {
    max-width: 85vw;
  }
`;

export const HeadingPrimary = styled.h2`
  margin-bottom: 4rem;
  text-align: center;
  text-transform: capitalize;
`;

export const HeadingSecondary = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  text-transform: capitalize;
`;

export const HeadingTertiary = styled.h4`
  color: var(--primaryColor);
  text-transform: capitalize;
  padding-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ButtonPrimary = styled(Link)`
  display: inline-block;
  color: #fff;
  background: var(--primaryColor);
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 0.7rem 1.5rem;
  text-transform: uppercase;
  text-align: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primaryColor);
    background-color: var(--primaryLightColor);
  }
`;
