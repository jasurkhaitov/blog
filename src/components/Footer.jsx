import React from 'react'
import circle from '../assets/img/circle.png'

export default function Footer() {
  return (
    <footer className='Contact pt-[30px] sm:pt-[40px] md:pt-[70px] pb-[70px] sm:pb-[80px] md:pb-[100px] bg-[#0a101e]'>
        <div className="container m-auto">
            
            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>Contact</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>Contact</p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[25px] xl:gap-[70px] px-[20px] sm:px-0 mt-[50px] xl:mt-[75px] w-full x450:w-[90%] sm:w-[80%] xl:w-[1000px] m-auto'>
                <img src={circle} alt="" className='block x450:hidden xl:block p-[30px]' data-aos = 'fade-up'/>

                <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-[20px]' data-aos = 'fade-up'>
                    <input type="hidden" name="access_key" value="c558aafa-c58a-469c-8cb4-411d163a38d6"/>
                    <input type="text" placeholder='Enter your name' className='bg-[#151030] py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-md shadow-[#050816]' required/>
                    <input type="email" placeholder='Enter your email' className='bg-[#151030] py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium shadow-md shadow-[#050816]' required/>
                    <textarea name="information" cols="30" rows="10" className='bg-[#151030] h-[170px] xs:h-[200px] x450:h-auto py-3 sm:py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none shadow-md shadow-[#050816]' placeholder='What you want to say?' required></textarea>
                    <div className="flex justify-between">
                        <button type='submit' className='bg-[#151030] py-3 px-10 rounded-xl outline-none w-fit text-[#aaa6c3] font-bold shadow-md shadow-[#050816] active:scale-90'>Send</button>
                        <button type='reset' className='bg-[#151030] py-3 px-10 rounded-xl outline-none w-fit text-[#aaa6c3] font-bold shadow-md shadow-[#050816] active:scale-90'>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  )
}