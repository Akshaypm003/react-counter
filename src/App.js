import React, {useState} from "react";
import './App.css';


function App() {

  const [val,setVal]=useState(null)
  const [count,setCount]=useState(val)

  return (
    <>
    <div className="main">
      <input onChange={(e)=>{setVal(Math.trunc(Math.abs(e.target.value)))}} type="number" name="iValue" id="" placeholder="Enter-initialvalue" /> <br />
      <h2>COUNTER: {val} </h2>
      <button onClick={(e)=>{setVal(val+1)}} type="button" className="addBtn">+</button>
      <button onClick={(e)=>{
        if (val>0){setVal(val-1)}
        else setVal(0)
      }} type="button" className="subBtn">-</button>
    </div>

    </>
  );
}

export default App;

