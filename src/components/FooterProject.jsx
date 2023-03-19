import React from 'react'

const FooterProject = () => {
  return (
    <div className='w-full h-[80px] justify-between items-start px-4 bg-gray-800/90 text-gray-100'>
        
{/*      
            <img src={Logo} alt='Logo' style={{width: '20px'}} />
         */}
          <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className=' hidden sm:flex px-4'>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Projects</a>
            </li>

            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
        </div>
            <p className=' text-gray-100 py-6 text-right text-[11px]'>Copyright @ 2023 Humble Glorious Glass.  Desgined by Shivanshu Rights Reserved </p>
           
        
    </div>
  )
}

export default FooterProject