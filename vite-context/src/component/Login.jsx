import React, { useState,useContext } from 'react'
import UserConext from '../context/UserContext'

function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserConext)

    const handlesubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none col-span-11'/>
        <br />
        <input type="text" className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none '
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' />
        <br />
        <button onClick={handlesubmit} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none'>Submite</button>
    </div>
  )
}

export default Login