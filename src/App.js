import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://app.netlify.com/sites/classy-swan-70b63b/overview"
            target="_blank"
            rel="noreferrer"
          >
            Kathryn Huber
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/krhuber/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
