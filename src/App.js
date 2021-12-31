import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import CocktailPage from "./pages/cocktail-page/cocktail-page.component";
import AboutPage from "./pages/about-page/about-page.component";
import ErrorPage from "./pages/error-page/error-page.component";
import Header from "./components/header/header.component";

import "./App.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cocktails/:cocktailId" component={CocktailPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
