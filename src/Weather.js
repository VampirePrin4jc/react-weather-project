import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div classname="row">
          <div classname="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div classname="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div>
        <h1>Tyler</h1>
        <ul>
          <li>Monday 11:00pm</li>
          <li>Rain</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.jWV25ot__Ge1q61YnCq2jAHaHa&pid=Api"
              alt="Rain"
              width="60"
              height="60"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">15</span>
              <span className="unit">°C</span>
            </div>
          </div>
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
