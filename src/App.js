import React from "react";
import Child from "./Child"
import "./App.css";
import { GlobalProvider } from "./transContex";



function App() {

  return (
    

    <GlobalProvider>
      <button className="btn m-10" onclick="halfmoon.toggleDarkMode()"> &#127769;</button>
      <Child/>
      </GlobalProvider>
  );
}

export default App;
