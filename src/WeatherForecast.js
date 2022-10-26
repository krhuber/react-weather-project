import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "t9bfof0abe24f22230d475698a8418f5";
  let longitude = props.corrdinates.longitude;
  let latitude = props.corrdinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon iconCode="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">68°</span>|
            <span className="WeatherForecast-temperature-min">63°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
