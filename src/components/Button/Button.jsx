import React from "react";
import "./Button.css";

const Button = ({ name, onClick, icon, buttonColor, textColor }) => {
  return (
    <button
      style={{ background: buttonColor}}
      onClick={onClick}
      className="button_wrapper"
    >
      <h1 style={{ color: textColor }}>{name}</h1>
      <div>{icon}</div>
    </button>
  );
};

export default Button;
