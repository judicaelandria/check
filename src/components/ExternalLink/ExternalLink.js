import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const ExternalLink = ({ link, children }) => {
  return (
    <Ext href={link} target="_blank">
      {children}
    </Ext>
  );
};

ExternalLink.prototype = {
  link: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

const Ext = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;
