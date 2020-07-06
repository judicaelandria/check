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

const Wrapper = styled.li`
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  > svg {
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: "Raleway", sans-sherif;
  margin-left: 10px;
  text-decoration: ${(props) =>
    props.completed === true ? "line-through" : ""};
  max-width: 90%;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
