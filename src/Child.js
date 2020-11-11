import React, { useContext } from "react";
import CounterContexvar from "./counterContex";
import "./main.css";

const Child = () => {
  let countervalue = useContext(CounterContexvar);
  console.log(countervalue)
  return (
    <div>
      <h1>Counter  1</h1>
      <h1 className="counter">{countervalue[0]}</h1>

      <button onClick={() => countervalue[1](++countervalue[0])}>
        Increment
      </button>
    </div>
  );
};

export default Child;
