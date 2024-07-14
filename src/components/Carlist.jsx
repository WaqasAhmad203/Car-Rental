import React from 'react'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import car3 from '../assets/car3.png'
export default function Carlist() {
  return (
    <div className='  dark:bg-neutral-900'>
      <h1 className=' text-4xl p-4 font-semibold text-black dark:text-white text-center'>Most Popular Cars</h1>
      <div className=' flex flex-col items-center md:flex-row   gap-24 justify-center mt-4 '>
        <div className="card card-compact dark:bg-sky-100 bg-neutral-900 w-72 md:w-96 shadow-2xl ">
          <figure>
            <img className='h-40 mt-2 hover:-translate-y-1 hover:ease-out duration-300'
              src={car1}
              alt="Hyundai Tucson" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold dark:text-black text-white">Hyundai Tucson</h2>
            <p className='dark:text-black text-white text-lg font-semibold'>180$/Day</p>
            <p className='dark:text-black text-white'>HP : 220</p>
            <p className='dark:text-black text-white'>Seats : 5</p>
            <p className='dark:text-black text-white'>Transmission : Automatic</p>
            <p className='dark:text-black text-white'>Milage : 12km/L</p>
            <div className="card-actions justify-center">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold my-2 py-3  px-6 rounded-lg'>Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact dark:bg-sky-100 bg-neutral-900 w-72 md:w-96 shadow-2xl">
          <figure>
            <img className='h-40 mt-2 hover:-translate-y-1 hover:ease-out duration-300'
              src={car2}
              alt="Mercedes CLA" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold dark:text-black text-white">Mercedes CLA</h2>
            <p className='dark:text-black text-white text-lg font-semibold'>200$/Day</p>
            <p className='dark:text-black text-white'>HP : 240</p>
            <p className='dark:text-black text-white'>Seats : 4</p>
            <p className='dark:text-black text-white'>Transmission : Automatic</p>
            <p className='dark:text-black text-white'>Milage : 10km/L</p>
            <div className="card-actions justify-center">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold my-2 py-3  px-6 rounded-lg'>Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact dark:bg-sky-100 bg-neutral-900 w-72  md:w-96 shadow-2xl">
          <figure>
            <img className='h-40 mt-2 hover:-translate-y-1 hover:ease-out duration-300'
              src={car3}
              alt="Toyota Corolla" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold dark:text-black text-white ">Toyota Corolla</h2>
            <p className='dark:text-black text-white text-lg font-semibold'>100$/Day</p>
            <p className='dark:text-black text-white'>HP : 180</p>
            <p className='dark:text-black text-white'>Seats : 5</p>
            <p className='dark:text-black text-white'>Transmission : Automatic</p>
            <p className='dark:text-black text-white'>Milage : 14km/L</p>
            <div className="card-actions justify-center">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold my-2 py-3  px-6 rounded-lg'>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
