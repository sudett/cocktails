import styled from "styled-components";
import { CenterContainer } from "../../App.jsx";

export const SearchContainer = styled(CenterContainer)`
  padding: 3rem 4rem;
  background-color: #fff;
  box-shadow: var(--lightShadow);
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: var(--mainGrey);
  color: inherit;
  font-size: inherit;
`;
