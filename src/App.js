import React from "react";
import Child from "./Child"
import {useState} from 'react';
import "./App.css";
import { GlobalProvider } from "./transContex";
import { DarkmodeSwitch } from 'reacthalfmoon';


function App() {

  const [darkmode, setDarkmode] = useState(false);
  return (
    

    <GlobalProvider>
      <DarkmodeSwitch checked={darkmode} toggle={()=>{setDarkmode(!darkmode)}} />
      <Child/>
      </GlobalProvider>
  );
}

export default App;
