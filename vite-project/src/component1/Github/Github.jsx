import React, { useEffect, useState } from 'react'

function Github() {

    const[data,setdata] = useState([])
    useEffect(()=>{
        fetch("https://github.com/ShivamPatliya123")
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setdata(data)
        })
    },[setdata])

  return (
    <div className='text-center m-3 text-3xl bg-gray-600 text-white p-4'>Github : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/></div>
  )
}

export default Github