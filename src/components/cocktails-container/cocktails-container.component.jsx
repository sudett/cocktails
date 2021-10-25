import React from "react";

import Loading from "../loading/loading.component";
import Cocktail from "../cocktail/cocktail.component";

import "./cocktails-container.styles.scss";

const CocktailsContainer = ({ cocktails, isLoading }) => {
  if (isLoading) return <Loading />;

  if (cocktails.length === 0)
    return (
      <h2 className="heading-primary">
        No cocktails matched your search criteria
      </h2>
    );

  return (
    <div className="cocktails-container container">
      <h1 className="heading-primary">Cocktails</h1>
      <div className="cocktails-list">
        {cocktails.map(({ id, ...otherProps }) => (
          <Cocktail key={id} id={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default CocktailsContainer;
