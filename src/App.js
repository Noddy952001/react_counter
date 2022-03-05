import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [count, setCount] = useState(0);
  
  return (
    <div className='counter'>
      <h1>Your Score :  {count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment
      </button>

      <button onClick={() => setCount(count -1)}className="btn" >
        Decrement
      </button>

      <button onClick={() => setCount(count*2)} className="btn" >
        Double
      </button>
    </div>
  );
}

export default App;
