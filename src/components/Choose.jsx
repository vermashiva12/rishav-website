import React from 'react'
import Logo from '../assets/LogoA.svg'

const Choose = () => {
  return (
    <div  className='max-w-[1140px] m-auto w-full p-4 py-16'>
        

            <h2 className='text-center text-4xl text-gray-700 '>Why Choose Us ?</h2>
        <div className='w-full grid md:grid-cols-2 sm:grid-cols-2 gap-4 text-center py-6'>
            <div>
                <img src={Logo} alt='Logo' />
            </div>
        <div className=' py-4  text-center'>
    

          <ul>
            <li className='text-[29px]'>Free Estimation</li>
            <li className='text-[28px]'>100% Customer Satisfaction</li>
            <li className='text-[28px]'>Quick Turn Around Time</li>
            <li className='text-[28px] font-bold'>In House Glass Cuttings</li>
            <li className='text-[28px]'>Warranty Provided</li>
          </ul>
          {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> */}
        </div>
        </div>
    </div>
  )
}

export default Choose