import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

export const Button = ({ onClick }) => {
  return <Wrapper onClick={onClick}><FormattedMessage id="Home.addNewTask" /></Wrapper>;
};

const Wrapper = styled.button`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background-color: #4bffb6;
  color: #ffffff;
  margin-left: 15px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s;

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    margin-top: 15px;
  }

  &:hover {
    background-color: #07ff9b;
  }

  &:focus {
    outline: none;
  }
`;
