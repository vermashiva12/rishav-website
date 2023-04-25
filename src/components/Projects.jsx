import React from 'react'

import C from '../assets/projects/project_c.PNG'
import A from '../assets/projects/project_a.jpg'
import D from '../assets/projects/project_d.jpg'
import E from '../assets/projects/project_e.jpg'
import F from '../assets/projects/project_f.jpg'


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
                src={A} alt='Test_b'/>
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src={D} alt='Tes_b' />
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src={E} alt='Test_b' />
            </div>
            <div>
                <img  
                className='w-full h-full object-cover '
                src={F} alt='Test_b' />
            </div>
        </div>
    </div>
  )
}

export default Projects