import React from 'react'
import { useState } from 'react'

function BgChanger() {
    const [color, setColor] = useState("lavender");
    return (
        <div className='w-700 h-[550px] p-2 '
            style={{ backgroundColor: color }}>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-3 py-2 rounded-xl'>
                    <button className='bg-red-600 p-2 rounded-md text-xl'
                        onClick={() => { setColor("red") }}
                    >Red</button>
                    <button 
                        onClick={()=>{setColor("green")}}
                    className='bg-green-600 p-2 rounded-md text-xl'>Green</button>
                    <button className='bg-yellow-600 p-2 rounded-md text-xl'
                    onClick={()=>{setColor("yellow")}}
                    >Yellow</button>
                    <button className='bg-pink-700 p-2 rounded-md text-xl'
                    onClick={()=>{setColor("pink")}}
                    >Pink</button>
                    <button className='bg-blue-600 p-2 rounded-md text-xl' 
                    onClick={()=>{setColor("blue")}}
                    >Blue</button>
                    <button className='bg-black p-2 rounded-md text-xl text-white'
                    onClick={()=>{setColor("black")}}
                    >Black</button>
        </div>
        </div>
    )
}

export default BgChanger