import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import PropTypes from "prop-types";

export const NavBar = ({ toggle, isDark }) => {
  return (
    <Wrapper>
      <img src={require("../images/logo.png")} alt="" className="logo" />
      {isDark === "dark" ? (
        <FaMoon onClick={toggle} />
      ) : (
        <FaSun onClick={toggle} />
      )}
    </Wrapper>
  );
};

NavBar.prototype = {
  toggle: PropTypes.func,
  isDark: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  flex-direction: row;

  @media (max-width: 900px) {
    padding: 20px;
  }

  > img.logo {
    width: 80px;
    height: 50px;
  }

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
