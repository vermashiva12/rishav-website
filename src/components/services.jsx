import React from 'react'
import { Link } from 'react-router-dom'

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
           <Link to='services/showerdoor' ><h3  className=' absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-blue-400 text-2xl font-bold'>Shower Doors</h3> 
            <img src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659 ' alt=''
             className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             />
             </Link>

        </div>
        <div className='relative p-4'>
        <Link to='services/glassrailing' ><h3  className=' absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-blue-400 text-2xl font-bold'>Glass Railing</h3> 
            <img src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659 ' alt=''
             className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             />
</Link>
        </div>
        <div className='relative p-4'>
           <Link to='services/custom'> <h3 className=' absolute z-10 bottom-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue-400  text-2xl font-bold'>Custom Builts</h3> 
            <img src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659 ' alt=''
             className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             />
</Link>

        </div>
    </div>
  )
}

export default Services