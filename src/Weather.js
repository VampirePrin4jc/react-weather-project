import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a City"
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>Tyler</h1>
      <ul>
        <li>Monday 11:00pm</li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.ecosia.org/images/?q=rain%20weather%20icon#id=6979D3600D5AA2FD3F9C2C5CF5DB23270FA55F57"
            alt="Rain"
          />
          15°C
        </div>
        <div classname="col-6">
          <ul>
            <li>Precipitation: 60%</li>
            <li>Humidity:40%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
