import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyle";
import RoutesComponent from "./RoutesComponent/RoutesComponent";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesComponent />
    </>
  );
}

export default App;
