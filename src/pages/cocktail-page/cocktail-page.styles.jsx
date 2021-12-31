import styled from "styled-components";

import { Container } from "../../App.jsx";

export const CocktailPageContainer = styled(Container)`
  padding: 6rem 0;
`;

export const CockContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 4rem;

  @media only screen and (max-width: 55em) {
    grid-template-columns: auto;
  }
`;

export const CockImage = styled.img`
  width: 30vw;
  object-fit: cover;
  border-radius: 0.5rem;

  @media only screen and (max-width: 55em) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

export const CockContent = styled.div`
  align-self: center;
`;

export const CockGroup = styled.div`
  margin-bottom: 2rem;
  letter-spacing: 0;
`;

export const CockLabel = styled.span`
  background-color: var(--primaryLightColor);
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  color: var(--primaryColor);
  font-weight: bold;
  border-radius: 3px;
`;

export const CockInfo = styled.span`
  font-weight: bold;
`;
