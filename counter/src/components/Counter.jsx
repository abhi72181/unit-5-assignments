import { useState } from "react"

import "./Counter.css"
function Counter(props){
  var counter=props.count
 var [counter,setCounter]=useState(counter)

 const increase=(value)=>{
    setCounter(counter + value)
 }

 const decrease=(value)=>{
  setCounter(counter + value)
}
 
const double=(value)=>{
  setCounter(counter * value)
}
 
  return <div>
  <h1 className={counter%2==0 ? "green":"red"}>counter:{counter}</h1>
  <button onClick={()=>increase(1)}>+</button>
  <button onClick={()=>decrease(-1)}>-</button>
  <button onClick={()=>double(2)}>x2</button>
  </div>
}

export  {Counter}