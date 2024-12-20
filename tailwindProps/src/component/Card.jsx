import React from 'react'

function Card({userName = "XYZ Name", btn="CLick me"}) {
  return (
    <div className='h-[300px] w-[200px] border-spacing-1 rounded-md bg-red-500 m-2 '>
        <h1 className='m-3 font-bold text-xl'>{userName}</h1>
        <p className='text-center m-3 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis obcaecati dicta facere veritatis voluptatibus.</p>
        <button className='bg-slate-600 p-2 m-2 ml-12 text-white rounded-md font-bold'>{btn}</button>
    </div>
  )
}

export default Card