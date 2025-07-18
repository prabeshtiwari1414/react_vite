import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[firstNumber, setFirstNumber] = useState(0)
  const[secondNumber, setSecondNumber] = useState(0)

 const addNumbers = () => {
    let temp = Number(firstNumber) + Number(secondNumber);
    setOutput(temp);
  }
  const subNumbers = () => {
    let temp = Number(firstNumber) - Number(secondNumber);
    setOutput(temp);
  }
  const mulNumbers = () => {
    let temp = Number(firstNumber) * Number(secondNumber);
    setOutput(temp);
  }
  const divNumbers = () => {
    let temp = Number(firstNumber) / Number(secondNumber);
    setOutput(temp);
  }

   const rmNumbers = () => {
    let firstNumber = 0;
    let secondNumber = 0;
    setFirstNumber(firstNumber);
    setSecondNumber(secondNumber);
    setOutput(0);
  }

  const[Output, setOutput] = useState(0)
  return (
  <div>
      <div><span>First Number:  </span>
          <input type="number" value={firstNumber} onChange={(e)=>setFirstNumber(e.target.value)}/>
      </div>
      <br />
      <div><span>Second Number:  </span>
          <input type="number" value={secondNumber} onChange={(e)=>setSecondNumber(e.target.value)}/>
      </div>
      <br />
      <div>
        <span>Output :: </span>
        <span><strong>{Output}</strong></span>
      </div>
      <br />

     
        <button onClick={()=>addNumbers()}>+</button>      
        
        <button onClick={()=>subNumbers()}>-</button>
        
        <button onClick={()=>mulNumbers()}>*</button>
        
        <button onClick={()=>divNumbers()}>/</button>
      
      <button onClick={()=> rmNumbers()}>AC</button>
  </div>
  )
}

export default App
