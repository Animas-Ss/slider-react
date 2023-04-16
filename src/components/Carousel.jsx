import { useState } from 'react'
import {AiOutlineLeft} from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';


export const Carousel = ({children: slides, autoSlide = false, autoSlideInterval = 3000}) => {
    const [curr, setCurr] = useState(0);

    const nextSlider = () => {
        setCurr((curr) => (curr === slides.length -1 ? 0 : curr + 1 ))
 
    }

    const prevSlider = () => {
        setCurr((curr) => (curr === 0 ? slides.length -1 : curr -1))
    }

    useState(() => {
        if(!autoSlide) return;
        const timer = setInterval( nextSlider, autoSlideInterval);
        return () =>{
            clearInterval(timer)
        }
    }, [])


  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
        <div className='absolute inset-0 flex items-center justify-between p-2'>
            <button className='p-1 bg-white rounded-full shadow' onClick={prevSlider}>
                <AiOutlineLeft className='text-[40px]'/>
            </button>
            <button className='p-1 bg-white rounded-full shadow' onClick={nextSlider}>
                <AiOutlineRight className='text-[40px]'/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                    <div key={i} className={`transition-all w-4 h-4 rounded-full bg-white ${ curr === i ? "p-2" : "opacity-50"}`}/>
                ))}
            </div>
        </div>
    </div>
  )
}
