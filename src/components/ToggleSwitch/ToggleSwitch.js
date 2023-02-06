import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__checkbox"
        type="checkbox"
        name="toggle-switch-checkbox"
        value={currentTemperatureUnit}
        onChange={handleToggleSwitchChange}
        checked={isChecked}
      />
      <div className="toggle-switch__slider" />
      <div className="toggle-switch__labels">
        <span>F</span>
        <span>C</span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
