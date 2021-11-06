import React from "react";
import './Weather.css';

export default function Weather() {
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search city..." className="form-control"/> </div>
                <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/> </div>
            </div>
        </form>
        <h1>Barcelona</h1>
        <ul>
            <li>Saturday 15:00</li>
            <li>Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"></img>
            18°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 0%</li>
                    <li>Humidity: 33%</li>
                    <li>Wind: 11 km/h</li>
                </ul>
            </div>
        </div>
    </div> 
);
}