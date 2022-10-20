import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon
                iconCode={props.data.icon}
                alt={props.data.description}
              />
              <span>
                <UnitConversion fahrenheit={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°F</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
