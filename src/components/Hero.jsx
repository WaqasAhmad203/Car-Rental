import React from 'react'
import heropng from '../assets/hero-section.jpeg'

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heropng})`,
      }}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Website</h1>
          <p className='text-xl mb-8 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold -m-3 py-3 px-5 rounded-lg'>Get Started</button>
        </div>
      </div>
    </div>
  )
}