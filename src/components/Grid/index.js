import React from "react";
import styled from "styled-components";

export const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;
  padding: 0;
  width: 100%;
`;
