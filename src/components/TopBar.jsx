import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'

import Logo from '../assets/mainLogo.svg'
import Cl from '../assets/catelogue.pdf'


const TopBar = () => {
  return (
    <div className='flex justify-between  bg-neutral-200 items-center px-4 py-8'>
        <div className='flex items-center max-h-[25px] '>
            <img src={Logo}  alt="Logo" style={{width: '180px' , height: '150px'}} />
            <h1 className='text-3xl text-black '>Humble Glorious Glass  </h1>

        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle  size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>9AM -6PM</p>
            </div>
            <div className='hidden md:flex items-center px-4'>
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]'/>
                
                 <p className='text-sm text-gray-700 '>1-236-818-1008</p> 

            </div>
             <div className='hidden md:flex items-center px-6'>
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>1-905-872-3010</p>

            </div> 
            <div>
                <a href={Cl} target='_blank'  rel='noreferrer'>
                <button >Catelogue</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopBar