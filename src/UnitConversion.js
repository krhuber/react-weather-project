import React from "react";

export default function UnitConversion(props) {
  return (
    <div className="UnitConversion">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
