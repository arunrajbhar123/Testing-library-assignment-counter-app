import React, { useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>InitalCounter Value : {counter}</h1>
      <CounterButton 
      handleAdd={()=>setCounter(counter+5)}
      handleReduce={()=>setCounter(counter-5)}
      />
    </div>
  );
}

export default App;
