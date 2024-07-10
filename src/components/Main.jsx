import React from 'react'
import EmblaCarousel from './Carousel/EmblaCarousel'

const OPTIONS = { loop: true }

export default function Main() {
  return (
    <main className='Overview pt-[30px] sm:pt-[40px] md:pt-[70px] bg-[#0a101e]'>
        <div className='container m-auto'>

          <div className='relative w-full' data-aos = 'fade-up'>
            <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>OVERVIEW</p>
            <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] uppercase pt-0 px-[10px] border-b-2 border-b-[#fec544]'>OVERVIEW</p>
          </div>  

          <div className='p-[15px] sm:px-0 sm:w-[90%] xl:w-[80%] 2xl:w-[70%] m-auto text-center' data-aos = 'fade-up'>
            <p className='text-white text-md sm:text-lg lg:text-xl font-medium'>I am a software engineer with expertise in a range of web development technologies, including <span className='text-[#fec544]'>HTML</span>, <span className='text-[#fec544]'>CSS</span> , <span className='text-[#fec544]'>JavaScript</span> , <span className='text-[#fec544]'>TypeScript</span> , <span className='text-[#fec544]'>React.js</span>, <span className='text-[#fec544]'>Next.js</span> and <span className='text-[#fec544]'>Firebase</span> along with proficiency in various other essential tools. My ability to quickly grasp new concepts and my problem-solving skills allow me to address real-world challenges in a user-friendly manner.</p>
          </div>

          <EmblaCarousel options={OPTIONS}/>

        </div>
    </main>
  )
}