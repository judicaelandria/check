import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { CheckBox } from "../CheckBox";

export const CheckCard = ({ title, value, onClick, onChange }) => {
  return (
    <Wrapper>
      <Section>
        <CheckBox value={value} onChange={onChange} />
        <Title completed={value}>{title}</Title>
      </Section>
      <FaTrash onClick={onClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  > svg {
    width: 20px;
    height: 20px;
    color: #f5f5f5;
    cursor: pointer;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: "Raleway", sans-sherif;
  margin-left: 10px;
  text-decoration: ${(props) =>
    props.completed === true ? "line-through" : ""};
  max-width: 100%;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
