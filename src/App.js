import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
  <div className="App"> 
    <div className="container">
    <Weather />
    <footer> This project is coded by Stefania Popescu and is open-sourced on <a href="https://github.com/Stefp27/Weather-React/tree/master">GitHub</a>
  </footer>
    </div>
  </div>
  );
}
