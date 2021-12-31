import React from "react";

import {
  CenterContainer,
  HeadingSecondary,
  ButtonContainer,
  ButtonPrimary,
} from "../../App.jsx";

const ErrorPage = () => (
  <CenterContainer>
    <HeadingSecondary>Oops! It's a dead end</HeadingSecondary>
    <ButtonContainer>
      <ButtonPrimary to="/">Back home</ButtonPrimary>
    </ButtonContainer>
  </CenterContainer>
);

export default ErrorPage;
