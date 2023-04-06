"use client";

import React, { useState } from 'react'

export default function CounterApp() { 
    
    const [counter, setCounter] = useState(0); //when value of variable has to be changed
    const decrement = () => {
        setCounter(counter - 1);
    };
    const increment = () => {
        setCounter(counter + 1);
    };
    const decrementby2 = () => {
        setCounter(counter - 2);
    };
    const incrementby2 = () => {
        setCounter(counter + 2);
    };

  return ( 
  <>
  <button onClick={decrementby2}>Decrement  by 2</button>
  <button onClick={decrement}>Decrement</button>
  {counter}
  <button onClick={increment}>Increment</button>
  <button onClick={incrementby2}>Increment by 2</button>
  </>
  )
}
