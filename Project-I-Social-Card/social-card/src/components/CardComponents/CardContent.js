import React from "react";
import "./Card.css";

export const CardContent = () => {
  return (
    <div className="card-content">
      <h3>Get started with React</h3>
      <p>
        React makes it painless to create interactive Uis. Design simple views
        for each state in your application
      </p>
      <a href="https://reactjs.org/" className="card-content-site">
        reactjs.org
      </a>
    </div>
  );
};
