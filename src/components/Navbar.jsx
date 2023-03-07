import React, {useState} from 'react';
import {FaBars,FaFacebookF,FaFacebook,FaInstagram,FaGooglePlusG} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Cl from '../assets/catelogue.pdf'

const Navbar = () => {

    const [nav, setNav] =useState(false)
    const handleNav =() => {
        setNav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
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
    
    <div className='flex justify-between '>
        <a rel="noreferrer" href='https://www.facebook.com/people/Humble-Glorious-Glass/pfbid0sZWWKXEj57n1KyjR4wMMiD81ji3M9dC5WG2bx3g4igB1HuSvcvQWavEgXrwQYhe3l/?mibextid=LQQJ4d' target="_blank">
        <FaFacebookF className='mx-4'/>
        </a>
        <a rel="noreferrer" href='https://www.google.co.in/search?q=Humble+Glorious+Glass+inc.%2C+Treasure+Drive%2C+Brampton%2C+ON&sxsrf=AJOqlzX65C4f1USn1tXqIBp3vyfVTa8f-g%3A1677626995802&ei=c47-Y8fHMJ_Q5NoP4dS5gAo&oq=humble+glorious+glass+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgCMgQIIxAnMgYIABAWEB4yAggmMgUIABCGAzoICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFQ0QFYjQZgwBRoAXAAeACAAfcBiAGfA5IBBTAuMS4xmAEAoAEByAEFwAEB&sclient=gws-wiz-serp' target='_black'>
        <FaGooglePlusG className='mx-4'/>
        </a>
        <a rel="noreferrer" href='https://www.instagram.com/humble_glorious/?igshid=YmMyMTA2M2Y%3D'target= "_blank" >
        <FaInstagram className='mx-4'/>
        </a>
    </div>
    {/** HameBurguer Icon */}
    <div onClick={handleNav}  className='sm:hidden z-10 '>
        <FaBars  size={30} className=' pr-4 cursor-pointer' />
    </div>
    <div onClick={handleNav}
     className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col ' 
    : 'absolute top-0 h-screen left-[100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
                <a rel="noreferrer" href='#home'>Home</a>
            </li>
            <li className='text-2xl py-8'>
                <a rel="noreferrer" href='#Services'>Services</a>
            </li>
            <li className='text-2xl py-8'>
                <a rel="noreferrer" href='#Projects'>Projects</a>
            </li>

            <li className='text-2xl py-8'>
                <a rel="noreferrer" href='#about'>About</a>
            </li>
            <li className='text-2xl py-8'>
                <a rel="noreferrer" href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-white'
                     href='https://www.facebook.com/people/Humble-Glorious-Glass/pfbid0sZWWKXEj57n1KyjR4wMMiD81ji3M9dC5WG2bx3g4igB1HuSvcvQWavEgXrwQYhe3l/?mibextid=LQQJ4d' rel="noreferrer" target='_blank'>
                        Facebook <FaFacebook  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                    <a className='flex justify-between items-center w-full text-white'
                     href='https://www.instagram.com/humble_glorious/?igshid=YmMyMTA2M2Y%3D' rel="noreferrer" target='_blank'>
                        Instagram <FaInstagram  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                    <a className='flex justify-between items-center w-full text-white'
                    rel="noreferrer" href='mailto:humbleglassinc@gmail.com'>
                        Email<HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a className='flex justify-between items-center w-full text-white'
                     href={Cl} target="_blank" rel="noreferrer">
                        Catelogue<BsFillPersonLinesFill  size={30}/>
                    </a>
                </li>

                
            </ul>

</div>
        </div>

  )
}

export default Navbar