import React ,{useState} from 'react';
import './App.css';
export default function App(){
  const [count,setCount]=useState(0);
  return(
    
    <div className="App">
      <header>
        <h1>counter using states</h1>
      </header>
      <h2>Current value of count is {count}</h2>
    <button onClick={() => setCount(0)}>Reset counter</button>
    <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>Increment counter</button>
    <button onClick={() => setCount(count-1)}>decrement counter</button>
    </div>
  )
}
