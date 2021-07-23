import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Tyler" />
        <footer>
          This project was created by Katie Lotzer and is open-sourced on{" "}
          <a
            href="https://github.com/VampirePrin4jc/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <div>
            <a href="https://icons8.com/icon/655/rain">Rain icon by Icons8</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
