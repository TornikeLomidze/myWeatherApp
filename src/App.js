import React from 'react';
import './App.css';
import TodayWeather from "./component/todayWeather";
import MonthDaysWeather from "./component/monthDaysWeather";

function App() {
  return (
    <div className="App">

      <TodayWeather/>
      <MonthDaysWeather/>
    </div>
  );
}

export default App;
