import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const[data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/ShivamPatliya123')
      .then(res => res.json())
      .then(data => {setData(data)})
    }, [])
    
  return (
    <div className='text-white bg-gray-600 text-center m-4 p-4  text-3xl'>Github Followers:{data.followers}
    <img className='w-48 rounded-xl flex flex-center' src={data.avatar_url} />
    </div>
  )
}

export default Github;

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/ShivamPatliya123')

//    return response.json()
// }