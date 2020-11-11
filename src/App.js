import React, { useState } from "react";
import "./App.css";
import Parent from "./parent";
import CounterContexvar from "./counterContex";

function App() {
  let [Ismorning, setMorning] = useState(false);
  let counterState = useState(0); //[counter,setCounter]

  return (
    <CounterContexvar.Provider value={counterState}>
      <div className={`App ${Ismorning ? "night" : ""}`}>
        <Parent />
        <button onClick={() => setMorning(!Ismorning)}> Switch</button>
      </div>
    </CounterContexvar.Provider>
  );
}

export default App;
