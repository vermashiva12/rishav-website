import React from 'react'

import TopBar from '../components/TopBar'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoA.svg'
import NavbarServices from '../components/NavbarServices'
import FooterProject from '../components/FooterProject'
import C from '../assets/projects/project_c.PNG'


const ServicesB = () => {
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
            <img src={C} alt='Logo' className='h-full ' />
        </div>
    <div className=' py-4  text-center'>
      <div className='items-center '>
    <h2 className='text-center text-4xl text-yellow-700 font-bold'>Glass Railing</h2>
    </div>
      <p className='text-2xl py-4 justify-between'>
      Our glass railings are available in a range of designs and styles, including framed and frameless options. Frameless glass railings offer a sleek, modern look, with minimal hardware visible, creating a clean and sophisticated aesthetic. Framed glass railings provide additional stability and security, with the frame acting as a barrier to prevent falls.
<br />
<br />
Our glass railings are available in a variety of thicknesses and tints, allowing you to customize the look to suit your specific preferences. We can also create custom glass railings to fit unique spaces and requirements, ensuring a perfect fit every time.
      </p>
      </div>
      </div>
    </div>
    <FooterProject />
</div>
  )
}

export default ServicesB