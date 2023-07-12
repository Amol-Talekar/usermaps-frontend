import styled from "styled-components";

export const ViewSelectorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  width: 25%;

  cursor: pointer;

  :hover {
    color: red;
  }
`;

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
  width: 60%;
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

export const GoogleMapBox = styled.div`
  border: 1px solid black;
  width: 100%;
  margin-top: 20px;
`;

export const DisplayLatLng = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 30px;
`;

export const ViewComponentBox = styled.div`
  width: 100%;
`;
