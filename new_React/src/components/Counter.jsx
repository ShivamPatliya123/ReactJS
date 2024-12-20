import React, { useState } from 'react'
import "./Counter.css"
function Counter() {
    const[count, setCount] = useState(0)
  return (
    <div className='counter-container'>
        <p id='para'>You have Clicked {count} time</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter