import React from "react";
import "./Button.css";

export const NumberButton = props => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
};
