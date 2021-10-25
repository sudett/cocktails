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
      searchField: "",
    };
  }

  fetchCocktail = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(`${url}${this.state.searchField}`);
      const data = await response.json();

      const { drinks } = data;

      if (drinks) {
        const cocktails = drinks.map((drink) => {
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            alcoholic: drink.strAlcoholic,
            glass: drink.strGlass,
            image: drink.strDrinkThumb,
          };
        });

        this.setState({ cocktails }, () => console.log(this.state.cocktails));
      } else {
        this.setState({ cocktails: [] });
      }

      this.setState({ isLoading: false });
    } catch (err) {
      console.error(err);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchCocktail();
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value }, () => this.fetchCocktail());
  };

  render() {
    return (
      <div>
        <Search
          searchField={this.state.searchField}
          changeHandler={this.changeHandler}
        />
        <CocktailsContainer
          cocktails={this.state.cocktails}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}
