import React, {useEffect, useState, useRef} from 'react'
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import IMG from '../assets/contact.PNG'


const Slider = () => {
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
  
  
  const[currentIndex, setCurrentIndex] = useState(0)
  
  const slideRef = useRef()
  useEffect(() => {
   startSlider()
  },[]) 
  const startSlider = () => {
    setInterval(() => {
        nextSlide()
    }, 3000)
  }
  const prevSlide =() => {
    const isFirst = currentIndex=== 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide =() => {
    const isLast = currentIndex=== slides.length -1;
    const newIndex = isLast ?  0 : currentIndex + 1;
    setCurrentIndex(newIndex);


  }
    return (
   <div ref={slideRef} className='max-w-[1140px] h-[780px]   w-full m-auto py-16 px-4 group relative'>
    <div  style={{backgroundImage: `url(${slides[currentIndex].url})` }} 
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={50} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={50} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                slides.map((slde, slideIndex) => (
                    <div>
                            <RxDotFilled />
                    </div>
                ))
            }
            
        </div>
        
   </div>
  )
}

export default Slider