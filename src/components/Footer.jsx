import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[80px] justify-between items-start px-4 bg-gray-800/90 text-gray-100'>
        
{/*      
            <img src={Logo} alt='Logo' style={{width: '20px'}} />
         */}
          <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className=' hidden sm:flex px-4'>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#Services'>Services</a>
            </li>
            <li>
                <a href='#Projects'>Projects</a>
            </li>

            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        </div>
            <p className=' text-gray-100 py-6 text-right text-[11px]'>Copyright @ 2023 Humble Glorious Glass.  Desgined by Shivanshu Rights Reserved </p>
           
        
    </div>
  )
}

export default Footer