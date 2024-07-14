import React from 'react'

function contact() {
    return (
        <div className='dark:bg-neutral-900'>
            <div className='flex flex-col md:flex-row justify-between '>
                <div>
                    <p className='text-4xl text-black dark:text-white font-semibold my-4'>Lets collaborate on your upcoming car rental venture</p>
                    <p className='text-black dark:text-white text-left mt-4' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum enim sapiente atque. Harum sapiente, officia eligendi possimus repudiandae <br/> accusantium itaque aspernatur magni sequi, blanditiis quae sed deserunt consequuntur, ad quasi.
                        Corrupti ab blanditiis tenetur nobis pariatur</p>
                </div>
                <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-5 rounded-lg'>Contact</button>
                </div>
            </div>

        </div>
    )
}

export default contact