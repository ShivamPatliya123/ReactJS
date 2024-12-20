import React from 'react'
import{Link} from'react-router-dom'
function Footer() {
  return (
    <footer className='bg-gray-600 text-white text-2xl'>
    <div className="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-4">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1724934781~exp=1724938381~hmac=6a913cc66a280113ab269ad3c2aff198796d039d56b04b98db3c8236034d1100&w=740" alt="Logo" className='w-22 h-32 items-center' />
            </Link>
            </div>
            <div className='grid grid-cols-2 sm:gap-6 sm:grid-cols-3'> 
              <div>
                <h2 className='mb-6 text-sm font-semibold text-cyan-300 uppercase'>Resource
                  <ul className=' font-medium underline'>
                    <li className='mb-4 text-white'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='mb-4 text-white'>
                      <Link to="/about">About</Link>
                    </li>
                    <li className='mb-4 text-white'>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  </h2>
              </div>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer