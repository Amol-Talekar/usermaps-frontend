import styled from "styled-components";
import { Theme } from "../../styles/theme";

export const HomeContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ComponentSelectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ChoiceButton = styled.button.attrs((props) => ({
  isactive: props.isactive,
}))`
  border: none;
  font-size: 18px;
  padding: 16px;
  background-color: white;
  color: ${(props) => (props.isactive === "true" ? "blue" : "black")};
  border-bottom: ${(props) =>
    props.isactive === "true" ? "2px solid blue" : "1px solid gray"};

  width: 50%;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;
