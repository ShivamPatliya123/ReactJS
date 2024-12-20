
import { useState } from 'react'
import './App.css'

function App() {
let[count, setCount] = useState(0)
const AddValue = ()=>{
  setCount(count+1)
  if(count >= 20){
    setCount("Stop")
  }
}
const DecreaseValue = () =>{
  setCount(count-1)
  if(count <= 0){
    setCount(0)
  }
}
  return (
    <>
      <h1>Hello</h1>
      <h2>Count Value : {count}</h2>

      <button onClick={AddValue}>Add Value</button>
      <br />
      <br />
      <button onClick={DecreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
