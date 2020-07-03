import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
