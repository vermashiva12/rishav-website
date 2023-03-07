import React from 'react'

import C from '../assets/projects/project_c.PNG'



const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1140px] m-auto w-full px-4 py-4 '>
        <h2 className='text-center text-gray-700 p-4 text-4xl '>Projects</h2>
        <div className='grid sm:grid-cols-3 gap-4 '>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img 
                className='w-full h-full object-cover  '
                src='https://campbellglass.ca/wp-content/uploads/2021/12/campbell_glass_glassrailings_4-1.jpg' alt='Test_1' />
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src={C} alt='Test_b' />
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659' alt='Test_b'/>
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659' alt='Tes_b' />
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src='https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659' alt='Test_b' />
            </div>
        </div>
    </div>
  )
}

export default Projects