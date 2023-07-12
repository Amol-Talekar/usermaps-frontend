import React, { useState } from "react";
import * as Styles from "./style";
import axios from "axios";

const Signup = (props) => {
  const { setSelectedOption } = props;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    let obj = { name: userName, email, password };
    console.log(obj);

    try {
      const res = await axios.post("http://localhost:8020/users/signup/", obj);
      console.log(res.data);
      if (res?.data) {
        setUserName("");
        setEmail("");
        setPassword("");
        alert("User Signed Up Succesfully");
        setSelectedOption("login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles.Container>
      <Styles.LabelInput>
        <Styles.Label>Name</Styles.Label>
        <Styles.Input
          onChange={(e) => handleNameChange(e)}
          placeholder="username"
          type="text"
          value={userName}
        />
      </Styles.LabelInput>

      <Styles.LabelInput>
        <Styles.Label>Email</Styles.Label>
        <Styles.Input
          onChange={(e) => handleEmailChange(e)}
          placeholder="email"
          type="email"
          value={email}
        />
      </Styles.LabelInput>
      <Styles.LabelInput>
        <Styles.Label>Password</Styles.Label>
        <Styles.Input
          onChange={(e) => handlePasswordChange(e)}
          placeholder="password"
          type="password"
          value={password}
        />
      </Styles.LabelInput>

      <Styles.Button onClick={handleSignup}>Signup</Styles.Button>
    </Styles.Container>
  );
};

export default Signup;
