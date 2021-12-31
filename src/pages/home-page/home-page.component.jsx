import React from "react";

import CocktailsContainer from "../../components/cocktails-container/cocktails-container.component";
import Search from "../../components/search/search.component";

const HomePage = () => {
  return (
    <div>
      <Search />
      <CocktailsContainer />
    </div>
  );
};

export default HomePage;
