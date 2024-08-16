import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter , increaseCounter] = useState(5)
  const increaseValue = ()=>{
    if(counter < 20){

      increaseCounter(counter + 1)
    }
  }

  const decreaseValue = ()=>{
    if(counter >0 ){

      increaseCounter(counter - 1)
    }
  }

  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={increaseValue}>Increase Value</button>
    <br/>
    <button onClick={decreaseValue}>Decrease Value</button>
    <br/>
    <footer>{counter}</footer>
    </>
  )
}

export default App
