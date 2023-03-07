import React, { useState } from 'react'




const TestSlider = () => {
    
    const slides =[
        { 
            url: 'https://images.freecreatives.com/wp-content/uploads/2016/03/Cool-White-Backgrounds-1.jpg'
        },
        {
            url: 'https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659'
        },
        {
            url: 'https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659'
        }
    
    
      ];
    const [currentIndex, setCurrentIndex] =
    useState(0);
    const handleOnNClick = () => {setCurrentIndex(currentIndex + 1 )}
    const handleOnPClick = () => {setCurrentIndex(currentIndex - 1 )}


  return (
    <div className='w-full select-none relative'>
        <div className='aspect-w-16 aspect-h-9'>
        <img src={slides[currentIndex]} alt='' />
        </div>

        <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
            <button onClick={handleOnPClick}>Previous</button>
            <button onClick={handleOnNClick}>Next</button>

        </div>
    </div>
  )
}

export default TestSlider