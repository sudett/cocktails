import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState("");

  const fetchCocktail = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}${searchField}`);
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

        setCocktails(cocktails);
      } else {
        setCocktails([]);
      }

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, [searchField]);

  useEffect(() => {
    fetchCocktail();
  }, [searchField, fetchCocktail]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        isLoading,
        searchField,
        setSearchField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
