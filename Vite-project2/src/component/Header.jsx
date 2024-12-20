import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-gray-600 text-white text-2xl">
            <nav className="bg-gray-600 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap 
                justify-between
                items-center mx-auto max-w-screen-xl">
                    <Link className=''>
                        <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1724934781~exp=1724938381~hmac=6a913cc66a280113ab269ad3c2aff198796d039d56b04b98db3c8236034d1100&w=740" alt="Logo" className='w-22 h-24 ' />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-20 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
                        <ul className='flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0'>
                            <li>
                            <NavLink 
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                            <NavLink 
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                            <NavLink 
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                         
                </div>
            </nav>
        </header>
    )
}

export default Header