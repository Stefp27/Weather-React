import React from "react";
import Weather from "./Weather.jsx"
import './App.css';

export default function App() {
  return (
  <div className="App"> 
    <div className="container">
      <Weather defaultCity="Barcelona" />
      <footer> 
        This project is coded by Stefania Popescu and is open-sourced on
        <span> <a href="https://github.com/Stefp27/Weather-React/tree/master">
        GitHub
        </a>.
        </span>
      </footer>
    </div>
  </div>
  );
}