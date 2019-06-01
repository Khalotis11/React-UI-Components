import React from "react";
import "./Button.css";

export const ActionButton = props => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
};
