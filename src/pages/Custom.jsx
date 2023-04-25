import React from 'react'

import TopBar from '../components/TopBar'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoA.svg'
import F from '../assets/projects/project_f.jpg'
import NavbarServices from '../components/NavbarServices'
import FooterProject from '../components/FooterProject'

const Custom = () => {
  return (
    
    <div >
    <TopBar />
    <NavbarServices />
    <div className='max-w-[1140px] m-auto w-full p-4 py-28'>
      <div className='max-w-[180px] mx-auto text-center justify-center ' >
       <Link className=' bg-gray-500 items-center text-gray-100 border-2 hover:bg-blue-500 hover:border-gray-300 px-4 py-3 my-2 mx-auto flex ' to='/'>Back to Home Page</Link>
      </div>
      
      <div className='w-full grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
    
       
       
        <div >
            <img src={F} alt='Logo'  className='h-full '/>
        </div>
    <div className=' py-4  text-center'>
      <div className='items-center '>
    <h2 className='text-center text-4xl text-yellow-700 font-bold'>Custom Builts</h2>
    </div>
      <p className='text-2xl py-4 justify-between'>
      Humble Glorious specializes in providing a wide range of custom glass work services, including but not limited to, glass cutting, engraving, etching, shaping, and tinting.
<br />
<br />
Our team of skilled artisans and craftsmen work closely with our customers to design and create custom glass pieces that are both functional and visually stunning. Whether it's a custom mirror for a bathroom, a glass railing for a staircase, a decorative glass partition for a commercial space, or a unique glass sculpture for a private collection, we have the expertise and experience to bring your vision to life.
      </p>
      </div>
      </div>
    </div>
    <FooterProject />
</div>
  )
}

export default Custom