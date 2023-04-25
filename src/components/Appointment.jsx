import React from 'react'


const Appointment = () => {
  return (
    <div  className='max-w-[1140px] m-auto w-full  mt-[-5px] py-12'>
      
       
     <div className='  justify-between items-center '>
        <h1 className=' text-center head text-4xl'>Book an Appointment</h1>
       
         </div>
         <div className='justify-center flex items-center py-2 mx-auto px-24'>
         <a href='https://calendly.com/humblegloriousglass' target='_blank'  rel='noreferrer'>

<button className='but' >Click Here to Book</button>
 </a>
         </div>
        
 
    </div>
  )
}

export default Appointment