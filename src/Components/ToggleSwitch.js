import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  return (
    <>
      <input
        className="react-toggleSwitch-checkbox"
        id={`react-toggleSwitch-new`}
        type="checkbox"
        onClick={props.onClick}
      />
      <label className="react-toggleSwitch-label" htmlFor={`react-toggleSwitch-new`}>
        <span className={`react-toggleSwitch-button`} />
      </label>
    </>
  );
};

export default ToggleSwitch;
