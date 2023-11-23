import React from 'react'
import circle from '../assets/img/circle.png'

export default function Footer() {
  return (
    <footer className='pb-[50px] sm:pb-[80px] md:pb-[100px] bg-[#0a101e]'>
        <div className="container m-auto">
            
            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>Contact</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>Contact</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[70px] mt-[50px] px-[15px] sm:px-0 sm:mt-[75px] sm:w-[80%] xl:w-[1000px] m-auto'>
                <img src={circle} alt="" className='p-[30px]' data-aos = 'fade-up'/>

                <form action="#!" className='flex flex-col gap-[20px]' data-aos = 'fade-up'>
                    <input type="text" placeholder='Enter your name' className='bg-[#151030] py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-md shadow-[#050816]'/>
                    <input type="email" placeholder='Enter your email' className='bg-[#151030] py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-md shadow-[#050816]'/>
                    <textarea name="information" cols="30" rows="10" className='bg-[#151030] py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none shadow-md shadow-[#050816]' placeholder='What you want to say?'></textarea>
                    <button className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#050816]'>Send</button>
                </form>
            </div>
        </div>
    </footer>
  )
}