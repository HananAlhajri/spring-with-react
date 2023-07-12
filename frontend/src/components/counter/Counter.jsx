import { useState } from 'react';
import CounterButton from './CounterButton';
import './Counter.css'

export default function Counter(){
  //[0, function to update this state]
  const [count, setCount] = useState(0)

  function incrementGlobalCount(by){
    setCount(count + by);
  }

  function decrementGlobalCount(by){
    setCount(count - by);
  }

  function restCounter(){
    setCount(0);
  }

  return ( 
    <div>
      <span className="count"> {count} </span>
      <CounterButton by = {1} 
      increment = {incrementGlobalCount} decrement = {decrementGlobalCount}/>
      <CounterButton by = {2} 
      increment = {incrementGlobalCount} decrement = {decrementGlobalCount}/>
      <CounterButton by = {3} 
      increment = {incrementGlobalCount} decrement = {decrementGlobalCount}/>
      <button className='resetButton' onClick={restCounter}>Reset</button>

    </div>
  )
}
