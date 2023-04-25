import React from 'react'
import { Link } from 'react-router-dom'
import rail from '../assets/rail.jpg'

const Services = () => {
  return (
    /** These Services has further breakdown into another pages */
    <div id='Services' className='max-w-[1140px] m-auto w-full md:flex mt-[-5px] py-12'>
        {/* <div className='flex flex-col items-center py-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-600'>Services</p>
        </div> */}

        <div className='py-12'>
       <h2 className='text-4xl font-bold inline text-center  text-black/90'>Top Services</h2>
       </div>
       <div className='relative p-4'>
           <Link to='services/showerdoor' ><h3  className=' head absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-yellow-800 py-2 text-2xl font-bold'>Shower Doors</h3> 
            <img src='https://i.pinimg.com/564x/31/dc/4d/31dc4dec2ec86b3114b40d150e78d98d.jpg ' alt=''
             className='w-[1300px] h-full object-cover relative border-4 border-white shadow-lg '
             />
             </Link>

        </div>
        <div className='relative p-4'>
        <Link to='services/glassrailing' ><h3  className=' head absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%]  translate-y-[-50%] py-2 text-yellow-800 text-2xl font-bold'>Glass Railing</h3> 
            <img src='https://i.pinimg.com/564x/7a/be/a1/7abea1564993f2e457c6cdb1f5a90a5e.jpg' alt=''
             className=' h-full w-[1300px] object-cover relative border-4 border-white shadow-lg'
             />
</Link>
        </div>
        <div className='relative p-4'>
           <Link to='services/custom'> <h3 className=' head absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-2 text-yellow-800   text-2xl font-bold'>Custom Builts</h3> 
            <img src='https://i.pinimg.com/564x/aa/4d/fe/aa4dfecaf70120529e4b2c2ab47a5b6c.jpg ' alt=''
             className='w-[1300px] h-full object-cover relative border-4 border-white shadow-lg'
             />
</Link>

        </div>
    </div>
  )
}

export default Services