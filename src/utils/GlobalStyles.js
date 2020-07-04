import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #1e6262; 
    border-radius: 10px;
}
::-webkit-scrollbar-thumb { 
    background: #1e6262;
    border-radius: 10px;
} 
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
