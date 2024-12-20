
import { useEffect, useState } from 'react'

import { useCallback,useRef } from 'react';

function App() {
  const[length, setlength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)

  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str +="~!@#$%^&*()+-_{}[]?/`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed,charAllowed,passwordGenerator])

const CopyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
},[password])
  return (
    <> 
   
    <div className='text-orange-500 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-600'>
    <h1 className='text-white text-4xl text-center my-3'>PassWord Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        placeholder='Password'
        className='outline-none w-full py-1 px-3'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={CopyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:text-red-600'>Copy</button>
      </div>
      <div className='flex text-m gap-x-3'>
        <div className='flex text-item gap-x-1'>
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultValue={numberAllowed}
          id='numberInput'
         onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          Number
        </div>
        <div
        className='flex items-center gap-x-1'
        >
          <input 
          type="checkbox"
          defaultValue={charAllowed}
          id='charInput'
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          />
          Character
        </div>
      </div>
    </div>
    </>
  )
}

export default App
