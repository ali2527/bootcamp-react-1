import React,{useState} from 'react';
import './App.css';
import Dinner from './Dinner'



function App() {
 
  let [count,setCount] = useState(0);


  let Updatecounter =() =>{
    setCount(count = count+1);
  }
  

  return (
    <div className="App">
      <Dinner item="biryani" count={count}  update={Updatecounter}/>
      <button onClick={() => setCount(count + 1)} > click</button>
     
    </div>
    );
  }

export default App;
