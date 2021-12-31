import styled from "styled-components";

export const CocktailContainer = styled.div`
  height: 58rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: var(--lightShadow);
  overflow: hidden;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: var(--darkShadow);
  }
`;

export const CocktailImage = styled.div`
  height: 55%;
  /* width: 100%; */
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export const CocktailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
`;

export const CocktailName = styled.h2`
  font-size: 3rem;
`;

export const CocktailAlcoholic = styled.span`
  font-size: 1.4rem;
  color: var(--darkGrey);
  padding-bottom: 1rem;
`;
