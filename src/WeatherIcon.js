import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      src={`/images/${props.iconCode}.png`}
      size={props.size}
      alt={props.alt}
    />
  );
}
