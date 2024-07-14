import React from 'react'
import steering from "../assets/steering.png";
import doc from "../assets/doc.png";
import dollar from "../assets/dollar.png";

function Services() {
    return (
        <div className='dark:bg-neutral-900'>
            <h1 className='text-4xl p-4 font-semibold text-white text-center py-8'>Why Choose Us</h1>
            <div className='flex flex-col items-center md:flex-row gap-16 justify-center'>
                <div className="card bg-sky-400 dark:bg-sky-100 w-80 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={dollar}
                            alt=""
                            className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black  dark:text-black">Best Price</h2>
                        <p className="text-black dark:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>
                        <div className="card-actions">
                        <button className=' text-blue-800 font-semibold'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-sky-400 dark:bg-sky-100 w-80 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={doc}
                            alt=""
                            className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black dark:text-black">Easy To Apply</h2>
                        <p className="text-black dark:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>
                        <div className="card-actions">
                        <button className=' text-blue-800 font-semibold'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-sky-400 dark:bg-sky-100 w-80 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={steering}
                            alt=""
                            className="rounded-xl w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black dark:text-black">Best Drivers</h2>
                        <p className="text-black dark:text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>
                        <div className="card-actions">
                        <button className=' text-blue-800 font-semibold'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services