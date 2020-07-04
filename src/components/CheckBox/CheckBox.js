import React from "react";
import styled from "styled-components";

export const CheckBox = ({ value, onChange }) => {
  return (
    <Wrapper
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={value}
    />
  );
};

const Wrapper = styled.input`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
`;
