import React, { useRef, useEffect } from "react";

import { useGlobalContext } from "../../context";

import { SearchContainer, SearchInput } from "./search.styles";
import { HeadingTertiary } from "../../App.jsx";

const Search = () => {
  const { searchField, setSearchField } = useGlobalContext();
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const searchFieldHandler = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <SearchContainer>
      <HeadingTertiary>Search your favorite cocktail</HeadingTertiary>
      <SearchInput
        type="search"
        value={searchField}
        onChange={searchFieldHandler}
        ref={inputEl}
      />
    </SearchContainer>
  );
};

export default Search;
