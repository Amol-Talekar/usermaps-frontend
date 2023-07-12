import React, { useState } from "react";
import * as Styles from "./style";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("login");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <Styles.HomeContainer>
      <Styles.OptionsContainer>
        <Styles.ComponentSelectorContainer>
          <Styles.ChoiceButton
            isactive={selectedOption === "signup" ? "true" : "false"}
            onClick={() => handleOptionChange("signup")}
          >
            Signup
          </Styles.ChoiceButton>

          <Styles.ChoiceButton
            isactive={selectedOption === "login" ? "true" : "false"}
            onClick={() => handleOptionChange("login")}
          >
            Login
          </Styles.ChoiceButton>
        </Styles.ComponentSelectorContainer>

        <Styles.FormContainer>
          {selectedOption == "login" ? <Login /> : null}
          {selectedOption == "signup" ? (
            <Signup setSelectedOption={setSelectedOption} />
          ) : null}
        </Styles.FormContainer>
      </Styles.OptionsContainer>
    </Styles.HomeContainer>
  );
};

export default Home;
