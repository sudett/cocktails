import styled, { css } from "styled-components";

const loaderStyles = css`
  display: inline-block;
  width: 4rem;
  height: 10rem;
  color: var(--primaryColor);
  animation: load1 1s infinite ease-in-out;

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
    }

    40% {
      box-shadow: 0 -10rem;
    }
  }
`;

export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.span`
  ${loaderStyles}
  position: relative;
  animation-delay: -0.16s;

  &::before,
  &::after {
    ${loaderStyles}
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -5rem;
    animation-delay: -0.32s;
  }

  &::after {
    left: 5rem;
  }
`;
