import React from "react";
import "./App.css";

import { CalculatorDisplay } from "./components/DisplayComponents/CalculatorDisplay";
import { ActionButton } from "./components/ButtonComponents/ActionButton";
import { NumberButton } from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="App-container">
      <CalculatorDisplay />
      <div className="row">
        <ActionButton buttonStyle="clear" text="Clear" />
        <NumberButton buttonStyle="operation" text="÷" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <NumberButton buttonStyle="operation" text="x" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="4" />
        <NumberButton buttonStyle="number" text="5" />
        <NumberButton buttonStyle="number" text="6" />
        <NumberButton buttonStyle="operation" text="-" />
      </div>
      <div className="row">
        <NumberButton buttonStyle="number" text="1" />
        <NumberButton buttonStyle="number" text="2" />
        <NumberButton buttonStyle="number" text="3" />
        <NumberButton buttonStyle="operation" text="+" />
      </div>
      <div className="row">
        <ActionButton buttonStyle="zero" text="0" />
        <NumberButton buttonStyle="operation" text="=" />
      </div>
    </div>
  );
};

export default App;
