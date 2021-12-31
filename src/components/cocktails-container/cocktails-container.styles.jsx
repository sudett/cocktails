import styled from "styled-components";
import { Container } from "../../App.jsx";

export const CocktailsContainerStyles = styled(Container)`
  padding: 0 0 7rem;
`;

export const CocktailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  row-gap: 6rem;
  column-gap: 3rem;
`;
