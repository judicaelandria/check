import React from "react";
import styled from "styled-components";

export const Input = ({ value, onChange, name, placeholder }) => {
  return (
    <Wrapper
      name={name}
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  );
};

const Wrapper = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-left: 10px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  @media (max-width: 1024px) {
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`;
