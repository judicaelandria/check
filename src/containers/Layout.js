import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../utils/GlobalStyles";
import { dark, light } from "../theme";
import { NavBar } from "./Navbar";
import { SEO } from "../components/SEO";

export const Layout = ({ children }) => {
  const [isDark, setIsDark] = React.useState("dark");
  const toggle = () => {
    if (isDark === "dark") {
      setIsDark("light");
    } else {
      setIsDark("dark");
    }
  };
  return (
    <Wrapper>
      <SEO title="Check And Do Your Todos" />
      <ThemeProvider theme={isDark === "dark" ? dark : light}>
        <NavBar toggle={toggle} isDark={isDark} />
        <GlobalStyle />
        <Main>{children}</Main>
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const Main = styled.main`
  width: 100%;
  padding: 40px 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;
