import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../../components/loading/loading.component";

import {
  CocktailPageContainer,
  CockContainer,
  CockImage,
  CockContent,
  CockGroup,
  CockLabel,
  CockInfo,
} from "./cocktail-page.styles";

import { ButtonContainer, ButtonPrimary, HeadingPrimary } from "../../App.jsx";

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailPage = () => {
  const { cocktailId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchSingleCocktail = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url2}${cocktailId}`);
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
          setCocktail(cocktail);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchSingleCocktail();
  }, [cocktailId]);

  if (isLoading) return <Loading />;

  if (!cocktail)
    return (
      <CocktailPageContainer>
        <HeadingPrimary>No cocktail to display</HeadingPrimary>
      </CocktailPageContainer>
    );

  return (
    <CocktailPageContainer>
      <ButtonContainer>
        <ButtonPrimary to="/">Back home</ButtonPrimary>
      </ButtonContainer>
      <HeadingPrimary>{cocktail.name}</HeadingPrimary>
      <CockContainer>
        <CockImage src={cocktail.image} alt={cocktail.name} />
        <CockContent>
          <CockGroup>
            <CockLabel>Name:</CockLabel>
            <CockInfo>&nbsp; {cocktail.name}</CockInfo>
          </CockGroup>
          <CockGroup>
            <CockLabel>Category:</CockLabel>
            <CockInfo>&nbsp; {cocktail.category}</CockInfo>
          </CockGroup>
          <CockGroup>
            <CockLabel>Info:</CockLabel>
            <CockInfo>&nbsp; {cocktail.info}</CockInfo>
          </CockGroup>
          <CockGroup>
            <CockLabel>Glass:</CockLabel>
            <CockInfo>&nbsp; {cocktail.glass}</CockInfo>
          </CockGroup>
          <CockGroup>
            <CockLabel>Instructions:</CockLabel>
            <CockInfo>&nbsp; {cocktail.instructions}</CockInfo>
          </CockGroup>
          <CockGroup>
            <CockLabel>Ingredients:</CockLabel>
            <CockInfo>&nbsp; {cocktail.ingredients}</CockInfo>
          </CockGroup>
        </CockContent>
      </CockContainer>
    </CocktailPageContainer>
  );
};

export default CocktailPage;
