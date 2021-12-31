import React from "react";

import { useGlobalContext } from "../../context";

import Loading from "../loading/loading.component";
import Cocktail from "../cocktail/cocktail.component";

import {
  CocktailsContainerStyles,
  CocktailsList,
} from "./cocktails-container.styles";
import { HeadingPrimary } from "../../App.jsx";

const CocktailsContainer = () => {
  const { isLoading, cocktails } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (cocktails.length === 0)
    return (
      <HeadingPrimary>No cocktails matched your search criteria</HeadingPrimary>
    );

  return (
    <CocktailsContainerStyles>
      <HeadingPrimary>Cocktails</HeadingPrimary>
      <CocktailsList>
        {cocktails.map(({ id, ...otherProps }) => (
          <Cocktail key={id} id={id} {...otherProps} />
        ))}
      </CocktailsList>
    </CocktailsContainerStyles>
  );
};

export default CocktailsContainer;
