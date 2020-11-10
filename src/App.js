import React,{useState} from 'react';
import './App.css';
import Dinner from './Dinner'



function App() {
 
  let [count,setCount] = useState(0);

  return (
    <div className="App">
      <Dinner item="biryani" desert={() => setCount()} />
     
    </div>
    );
  }

export default App;
