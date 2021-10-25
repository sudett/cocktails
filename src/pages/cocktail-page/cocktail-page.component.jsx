import React from "react";

import Loading from "../../components/loading/loading.component";

import { Link } from "react-router-dom";

import "./cocktail-page.styles.scss";

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default class CocktailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      cocktail: null,
    };
  }

  fetchSingleCocktail = async () => {
    try {
      const id = this.props.match.params.cocktailId;
      const response = await fetch(`${url2}${id}`);
      const data = await response.json();

      const drink = data.drinks[0];
      if (drink) {
        const ingredients = [
          drink.strIngredient1,
          drink.strIngredient2,
          drink.strIngredient3,
          drink.strIngredient4,
          drink.strIngredient5,
        ]
          .filter((ing) => ing)
          .join(",");

        const cocktail = {
          name: drink.strDrink,
          info: drink.strAlcoholic,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
          instructions: drink.strInstructions,
          ingredients,
        };

        this.setState({ cocktail, isLoading: false }, () =>
          console.log(this.state.cocktail)
        );
      }
    } catch (err) {
      console.error(err);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchSingleCocktail();
  }

  render() {
    const { isLoading, cocktail } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div className="container cocktail-page">
        <div className="btn-container">
          <Link className="btn-primary " to="/">
            Back home
          </Link>
        </div>
        <h1 className="heading-primary">{cocktail.name}</h1>
        <div className="cock-container">
          <img
            className="cock-image"
            src={cocktail.image}
            alt={cocktail.name}
          />
          <div className="cock-content">
            <div className="cock-group">
              <span className="cock-label">Name:</span>
              <span className="cock-info">&nbsp; {cocktail.name}</span>
            </div>
            <div className="cock-group">
              <span className="cock-label">Category:</span>
              <span className="cock-info">&nbsp; {cocktail.category}</span>
            </div>
            <div className="cock-group">
              <span className="cock-label">Info:</span>
              <span className="cock-info">&nbsp; {cocktail.info}</span>
            </div>
            <div className="cock-group">
              <span className="cock-label">Glass:</span>
              <span className="cock-info">&nbsp; {cocktail.glass}</span>
            </div>
            <div className="cock-group">
              <span className="cock-label">Instructions:</span>
              <span className="cock-info">&nbsp; {cocktail.instructions}</span>
            </div>
            <div className="cock-group">
              <span className="cock-label">Ingredients:</span>
              <span className="cock-info">&nbsp; {cocktail.ingredients}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
