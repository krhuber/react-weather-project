import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo text-center mt-4">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <div className="d-flex align-items-center">
                <WeatherIcon
                  iconCode={props.data.icon}
                  alt={props.data.description}
                  size={64}
                />
                <span>
                  <UnitConversion fahrenheit={props.data.temperature} />
                </span>
              </div>
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
