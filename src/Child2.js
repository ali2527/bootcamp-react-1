import React, { useReducer } from "react";
import CounterReducer from "./counterReducer";
import "./main.css";

const Child = () => {

    let [state,dispatch] = useReducer(CounterReducer,0)
   return (
    <div>
      <h1>Counter 2 </h1>
      <h1 className="counter">{state}</h1>

      <button onClick={() => dispatch('increment') }>
        Increment 2
      </button>
    </div>
  );
};

export default Child;