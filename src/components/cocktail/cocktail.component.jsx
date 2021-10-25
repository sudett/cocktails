import React from "react";

import { Link } from "react-router-dom";

import "./cocktail.styles.scss";

const Cocktail = ({ image, alcoholic, glass, name, id }) => (
  <div className="cocktail">
    <div
      className="cocktail-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="cocktail-info">
      <h2 className="cocktail-name">{name}</h2>
      <h4 className="cocktail-glass">{glass}</h4>
      <span className="cocktail-alcoholic">{alcoholic}</span>
      <Link className="btn-primary" to={`/cocktails/${id}`}>
        Details
      </Link>
    </div>
  </div>
);

export default Cocktail;
