import React, { useEffect, useState } from "react";
import * as Styles from "./style";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateNew from "./components/CreateNew/CreateNew";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../shared/Header/Header";

const User = () => {
  const [selectedUserOption, setSelectedUserOption] = useState("dashboard");
  const [userDetails, setUserDetails] = useState({});

  const currentToken = localStorage.getItem("userMapsToken");

  let navigate = useNavigate();

  useEffect(() => {
    if (currentToken) {
      const decodedUser = jwt_decode(currentToken);
      console.log("decodedUser => ", decodedUser);
      const _id = decodedUser?.id;
      if (_id) {
        handleFetchDetailsofUser(_id);
      }
    }

    if (!currentToken) {
      navigate("/");
    }
  }, [currentToken]);

  const handleFetchDetailsofUser = async (_id) => {
    try {
      const res = await axios.get(
        `http://localhost:8020/users/singleUser/${_id}`
      );

      console.log("res.data.singleUser => ", res?.data?.singleUser);
      if (res?.data) {
        setUserDetails(res?.data?.singleUser);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserOptionChange = (option) => {
    setSelectedUserOption(option);
  };

  console.log("userDetails => ", userDetails);
  const { _id, name, email, userLocations } = userDetails;

  return (
    <Styles.UserContainer>
      <Header userDetails={userDetails} />
      <Styles.OptionsContainer>
        <Styles.UserComponentSelectorContainer>
          <Styles.ChoiceButton
            isactive={selectedUserOption === "dashboard" ? "true" : "false"}
            onClick={() => handleUserOptionChange("dashboard")}
          >
            Dashboard
          </Styles.ChoiceButton>

          <Styles.ChoiceButton
            isactive={selectedUserOption === "createnew" ? "true" : "false"}
            onClick={() => handleUserOptionChange("createnew")}
          >
            Create New
          </Styles.ChoiceButton>
        </Styles.UserComponentSelectorContainer>
        <Styles.ChoiceContainer>
          {selectedUserOption === "dashboard" ? (
            <Dashboard userDetails={userDetails} />
          ) : null}
          {selectedUserOption === "createnew" ? (
            <CreateNew userDetails={userDetails} />
          ) : null}
        </Styles.ChoiceContainer>
      </Styles.OptionsContainer>
    </Styles.UserContainer>
  );
};

export default User;
