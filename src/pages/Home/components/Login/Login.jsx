import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styles from "./style";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    let obj = { email, password };
    console.log(obj);

    try {
      const res = await axios.post("http://localhost:8020/users/login/", obj);
      console.log(res.data);
      if (res?.data) {
        // Save token to local storage
        const { token, user } = res.data;
        localStorage.setItem("userMapsToken", token);

        alert("User Logged In Succesfully");
        if (token) {
          navigate("/user");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styles.Container>
      <Styles.LabelInput>
        <Styles.Label>Email</Styles.Label>
        <Styles.Input
          onChange={(e) => handleEmailChange(e)}
          placeholder="email"
          type="email"
        />
      </Styles.LabelInput>

      <Styles.LabelInput>
        <Styles.Label>Password</Styles.Label>
        <Styles.Input
          onChange={(e) => handlePasswordChange(e)}
          placeholder="password"
          type="password"
        />
      </Styles.LabelInput>

      <Styles.Button onClick={handleLogin}>Login</Styles.Button>
    </Styles.Container>
  );
};

export default Login;
