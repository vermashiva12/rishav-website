import React from 'react'
import contact from '../assets/contact.PNG'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16' >
        <h2 className='text-center text-[38px] font-bold text-gray-700 '>Contact Us</h2>
        <p className='text-center  text-gray-700 py-2'>We are Here to Help</p>
        <div className='grid aspect-auto md:grid-cols-2 '>
            <img style={{width:'500px', height: '500px'}} className='w-[80%] md:h-full object-fill p-2 '
            src={contact} alt='mainBG' />
        <form method='POST' action='https://getform.io/f/9cb5c2c2-d8ab-4f62-8a6b-04ebe25548af'>
            <div className='grid grid-cols-2 '>
                <input className='border m-2 p-2'  type="text" placeholder='First Name' name='first name'/>
                <input className='border m-2 p-2' type="text" placeholder='Last Name'name='last name'/>
                <input className='border m-2 p-2' type="text" placeholder='Email' name='email' />
                <input className='border m-2 p-2' type="tel" placeholder='Phone' name='number' />
                <input className='border col-span-2 p-2 m-2' type="text" placeholder='Address' name='address'/>
                <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10" name='message' placeholder='Please Leave Your Message'></textarea>
                <button className=' col-span-2 m-2 p-2 '>Submit</button>


            </div>
        </form>
        </div>

    </div>
  )
}

export default Contact