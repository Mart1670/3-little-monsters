import React from "react";
import Game from "./Game";
import "./index.css";
import { useContext } from "react";

const App = () => {
  return (
  <div className="d-flex flex-dir-col">
    <h1>Hey Mate !</h1>
    <Game />
  </div>);
};

export default App;