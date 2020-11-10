import React,{useState} from 'react';
import './App.css';
import Dinner from './Dinner'



function App() {
 
  let [count,setCount] = useState(0);
  

  return (
    <div className="App">
      <h1>value of counter is {count}</h1>
      <Dinner item="biryani"  />
      <button onClick={() => setCount(count + 1)} > click</button>
     
    </div>
    );
  }

export default App;
