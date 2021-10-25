import React from "react";

import CocktailsContainer from "../../components/cocktails-container/cocktails-container.component";
import Search from "../../components/search/search.component";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      cocktails: [],
      isLoading: true,
    };
  }

  fetchCocktail = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const { drinks } = data;
    console.log(drinks);
    const cocktails = drinks.map((drink) => {
      return {
        id: drink.idDrink,
        name: drink.strDrink,
        alcoholic: drink.strAlcoholic,
        glass: drink.strGlass,
        image: drink.strDrinkThumb,
      };
    });

    this.setState({ cocktails, isLoading: false }, () =>
      console.log(this.state.cocktails)
    );
  };

  componentDidMount() {
    this.fetchCocktail();
  }

  render() {
    return (
      <div>
        <Search />
        <CocktailsContainer
          cocktails={this.state.cocktails}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}
