
import Child from "./Child"
import "./App.css";
import { GlobalProvider } from "./transContex";





function App() {

  return (
    

    <GlobalProvider>
      <Child/>
      </GlobalProvider>
  );
}

export default App;
