import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 20px;
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-bottom: 4px;
  margin-top: 4px;
`;

export const Label = styled.label`
  flex-basis: 20%;
`;

export const Input = styled.input`
  flex-basis: 80%;
  //width: 100%;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 12px;
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 12px;
  width: 40%;
  min-width: 60px;
  border: 1px solid gray;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;

  &:hover {
    border: 1px solid blue;
    background-color: blue;
    color: white;
  }
`;
