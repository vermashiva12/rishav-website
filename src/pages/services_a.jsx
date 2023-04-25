import React from 'react'
import TopBar from '../components/TopBar'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoA.svg'

import FooterProject from '../components/FooterProject'
import NavbarServices from '../components/NavbarServices'
const Services_a = () => {
  return (
    <div >
        <TopBar />
        <NavbarServices />
        <div className='max-w-[1140px] m-auto w-full p-4 py-28'>
          <div className='max-w-[180px] mx-auto text-center justify-center ' >
           <Link className=' bg-gray-500 items-center text-gray-100 border-2 hover:bg-blue-500 hover:border-gray-300 px-4 py-3 my-2 mx-auto flex ' to='/'>Back to Home Page</Link>
          </div>
          
          <div className='w-full grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-center py-6'>
        
           
           
            <div >
                <img src='https://i.pinimg.com/564x/24/6a/62/246a620f5816d4698bdc66660459c9b2.jpg' alt='Logo' className='max-h-[500px] w-[90%]' />
            </div>
        <div className=' py-4  text-center'>
          <div className='items-center '>
        <h2 className='text-center text-4xl text-yellow-800 font-bold'>Shower Doors</h2>
        </div>
          <p className='text-2xl py-4   justify-between'>
          We offer a wide range of shower doors to enhance the beauty and functionality of your bathroom. Our shower doors are made from high-quality materials, including tempered glass, and are available in various styles and designs to suit your specific needs and preferences.

Our collection includes framed and frameless shower doors that can be hinged or sliding, depending on your space requirements. The frames of our shower doors are made of durable materials such as aluminum or stainless steel, ensuring strength and longevity.
          </p>
          </div>
          </div>
        </div>
        <FooterProject />
    </div>
  )
}

export default Services_a