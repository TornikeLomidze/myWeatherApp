import React from 'react';
import './style/App.scss';
import Today from "./component/today/today";
import Week from "./component/week/week";

function App() {
  return (
    <div className="App">

      <Today/>
      <Week/>
    </div>
  );
}

export default App;
