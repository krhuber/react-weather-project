import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon iconCode={props.forecastData.condition.icon} size={36} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        |
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
