import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F | °
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          °
          <a href="/" onClick={showFahrenheit}>
            F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
