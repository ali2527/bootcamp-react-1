import React from "react";
import Child from "./Child"
import {useState} from 'react';
import "./App.css";
import { GlobalProvider } from "./transContex";
import { toggleDarkmode } from 'reacthalfmoon';


function App() {

  return (
    

    <GlobalProvider>
      <button className="btn" onClick={toggleDarkmode}> &#127769;</button>
      <Child/>
      </GlobalProvider>
  );
}

export default App;
