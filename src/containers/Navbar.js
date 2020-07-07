import React from "react";
import styled from "styled-components";
import { FaSun, FaMoon, FaGithub, FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { ExternalLink } from "../components/ExternalLink";
import { TaskContext } from "../context/TaskContext";
import { FormattedMessage } from "react-intl";

export const NavBar = ({ toggle, isDark }) => {
  const { setTasks } = React.useContext(TaskContext);
  /**
   * reset all task {tasks}
   */
  const reset = () => {
    setTasks([]);
  };
  return (
    <Wrapper>
      <img src={require("../images/logo.png")} alt="" className="logo" />
      <Aside>
        <FaRegTrashAlt title={<FormattedMessage id="Nav.deleteAllTask" defaultMessage="Delete all task" />} onClick={reset} />
        <ExternalLink link="https://github.com/Judionit/check">
          <FaGithub />
        </ExternalLink>
        {isDark === "dark" ? (
          <FaMoon onClick={toggle} />
        ) : (
          <FaSun onClick={toggle} />
        )}
      </Aside>
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
    padding: 20px 10px;
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
const Aside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > :last-child {
    margin: 0;
  }

  > svg,
  > a > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 18px;
  }
`;
