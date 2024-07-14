import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar  bg-black text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
              <li className='px-4'><a>Home</a></li>
              <li className='px-4'><a>Cars</a></li>
              <li className='px-4'><a>About Us</a></li>
              <li className='px-4'><a>Booking</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Car Rentanl</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-8">
            <li className='mx-4 font-semibold text-xl  dark:hover:text-white hover:bg-blue-700 hover:text-white rounded-lg'><a>Home</a></li>
              <li className='mx-4 font-semibold text-xl dark:hover:text-white hover:bg-blue-700 hover:text-white rounded-lg'><a>Cars</a></li>
              <li className='mx-4 font-semibold text-xl dark:hover:text-white hover:bg-blue-700 hover:text-white rounded-lg'><a>About Us</a></li>
              <li className='mx-4 font-semibold text-xl dark:hover:text-white hover:bg-blue-700 hover:text-white rounded-lg'><a>Booking</a></li>
            </ul>
          </div>
        </div>
    )
}
