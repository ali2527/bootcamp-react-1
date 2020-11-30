import React from "react";
import Child from "./Child"
import "./App.css";
import { GlobalProvider } from "./transContex";
import "halfmoon/css/halfmoon-variables.min.css"; 


function App() {
  return (
    <GlobalProvider>
      <Child/>
      </GlobalProvider>
  );
}

export default App;
