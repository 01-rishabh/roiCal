import React from 'react'

function ToggleSwitch2({ isOn, handleToggle, onColor }) {
  return (
    <>
      <input
      checked={isOn}
      onChange={handleToggle}
        className="react-toggleSwitch2-checkbox"
        id={`react-toggleSwitch2-new`}
        type="checkbox"
      />
      <label style={{ background: isOn && onColor }} className="react-toggleSwitch2-label" htmlFor={`react-toggleSwitch2-new`}>
        <span className={`react-toggleSwitch2-button`} />
      </label>
    </>
  )
}

export default ToggleSwitch2