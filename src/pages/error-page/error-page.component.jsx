import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="center-content">
    <h1 className="heading-secondary">Oops! It's a dead end</h1>
    <div className="btn-container">
      <Link to="/" className="btn-primary">
        Back home
      </Link>
    </div>
  </div>
);

export default ErrorPage;
