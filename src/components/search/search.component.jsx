import React from "react";

import "./search.styles.scss";

const Search = ({ searchField, changeHandler }) => (
  <div className=" center-content search ">
    <h4 className="heading-tertiary">Search your favorite cocktail</h4>
    <input
      className="search-input"
      type="search"
      value={searchField}
      onChange={changeHandler}
    />
  </div>
);

export default Search;
