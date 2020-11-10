import React from 'react';
import './App.css';
import Dinner from './Dinner'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Dinner item="biryani" desert="kheer"/>
     
    </div>
  );
}

export default App;
