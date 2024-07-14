import React from 'react'
import Carpng from '../assets/car.png' 
export default function About() {
  return (
    <div className='dark:bg-neutral-900'>
    <div className=' flex flex-col md:flex-row items-center '>
        <div className='w-1/2'>
        <img className='w-[90%] md:w-3/5 mx-6' src={Carpng} alt='' />
        </div>
        <div className='w-1/2 my-8 ' > 
        <h1 className=' text-4xl p-4 font-semibold dark:text-white text-center'>About</h1>
        <p className='dark:text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Congue quisque egestas diam in arcu cursus euismod quis viverra. In tellus integer feugiat scelerisque. Congue quisque egestas diam in arcu. </p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-8 py-3 px-5 rounded-lg'>Get Started</button>
        </div>
    </div>
    </div>
  )
}