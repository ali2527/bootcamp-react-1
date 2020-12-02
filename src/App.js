import React from "react";
import Child from "./Child"
import "./App.css";
import { GlobalProvider } from "./transContex";
import { toggleDarkmode } from 'reacthalfmoon';


function App() {

  return (
    

    <GlobalProvider>
      <button className="btn m-10" onClick={toggleDarkmode}> &#127769;</button>
      <Child/>
      </GlobalProvider>
  );
}

export default App;
