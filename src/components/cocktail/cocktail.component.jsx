import React from "react";

import {
  CocktailContainer,
  CocktailImage,
  CocktailInfo,
  CocktailName,
  CocktailAlcoholic,
} from "./cocktail.styles";
import { ButtonPrimary } from "../../App.jsx";

const Cocktail = ({ image, alcoholic, glass, name, id }) => (
  <CocktailContainer>
    <CocktailImage image={image} />
    <CocktailInfo>
      <CocktailName>{name}</CocktailName>
      <h4>{glass}</h4>
      <CocktailAlcoholic>{alcoholic}</CocktailAlcoholic>
      <ButtonPrimary to={`/cocktails/${id}`}>Details</ButtonPrimary>
    </CocktailInfo>
  </CocktailContainer>
);

export default Cocktail;
