import React, {useState,useEffect,useRef} from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight } from 'react-icons/bs';

const Hero = () => {
 
  const slides =[
    
    {
       // url: 'https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659'
       url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70744f141103295.624d99662ca36.jpg'
    },
    { 
     // url: 'http://cdn.home-designing.com/wp-content/uploads/2018/05/d0c0d160644969.5a54b9c7844b6.jpg'
      url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebf46a155100677.634ec8a8b323e.jpg'
    }
   



  ];
  const [currentIndex,setCurrentIndex] = useState(0)
  const slideRef = useRef()
  useEffect(() => {
   startSlider()
  },[]) 
  const startSlider = () => {
    setInterval(() => {
        nextSlide()
    }, 10000)
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
  // <div id='home' className='w-full h-[90vh]'>

       
  //      {/* <img src='https://www.nobroker.in/blog/wp-content/uploads/2022/02/Bathroom-Glass-Partitions.jpg' alt='mainBG'
  //       className='w-full h-full object-cover'
  //       /> */}
  //       {/* <img src='http://cdn.home-designing.com/wp-content/uploads/2018/05/d0c0d160644969.5a54b9c7844b6.jpg' alt='bg' className='w-full h-[85%] object-cover' /> */}
  //       {/* <img src='http://cdn.home-designing.com/wp-content/uploads/2018/05/luxury-master-bathrooms.jpg' alt='bg' className='w-full h-full object-cover' /> */}
  //       <div>
  //       <img  src="https://images.adsttc.com/media/images/623a/ccba/3e4b/3174/1a00/0011/large_jpg/FI.jpg?1648020659" alt="bg3" className='w-full h-full object-cover'/>
  //       </div>
  <div ref={slideRef} className=' max-h-[850px] w-full h-screen m-auto   group relative'>
    <div  style={{backgroundImage: `url(${slides[currentIndex].url})`   } } 
    className='w-full h-full object-fill  bg-center bg-cover  duration-500'>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={50} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={50} />
        </div>
  </div>
  )
}

export default Hero