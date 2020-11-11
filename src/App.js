import React,{useState} from 'react';
import './App.css';
import Dinner from './Dinner'



function App() {
 
  let [count,setCount] = useState(0);
  let [Ismorning,setMorning] = useState(false);




  return (
    <div className={`App ${Ismorning ? 'night' : ''}`} >
      <Dinner item="biryani" count={count}  />
      <button onClick={() => setCount(count + 1)} > click</button>

      <button onClick={() => setMorning(!Ismorning)} > Switch</button>
     
    </div>
    );
  }

export default App;
