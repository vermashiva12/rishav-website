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
        <div className='max-w-[1140px] m-auto w-full p-4 py-32'>
          <div className='max-w-[180px] mx-auto text-center justify-center ' >
           <Link className=' bg-gray-500 items-center text-gray-100 border-2 hover:bg-blue-500 hover:border-gray-300 px-4 py-3 my-2 mx-auto flex ' to='/'>Back to Home Page</Link>
          </div>
          
          <div className='w-full grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-center py-6'>
        
           
           
            <div >
                <img src={Logo} alt='Logo' />
            </div>
        <div className=' py-4  text-center'>
          <div className='items-center '>
        <h2 className='text-center text-4xl text-orange-700 font-bold'>Shower Doors</h2>
        </div>
          <p className='text-2xl py-4 justify-between'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          </div>
        </div>
        <FooterProject />
    </div>
  )
}

export default Services_a