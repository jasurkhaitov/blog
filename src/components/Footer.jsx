import React from 'react'
import circle from '../assets/img/circle.png'

export default function Footer() {
  return (
    <footer className='Contact pt-[30px] sm:pt-[40px] md:pt-[70px] pb-[50px] sm:pb-[100px] md:pb-[100px] bg-[#0a101e]'>
        <div className="container m-auto">
            
            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>Contact</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>Contact</p>
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[25px] xl:gap-[70px] px-[20px] sm:px-0 mt-[50px] xl:mt-[75px] w-full x450:w-[90%] sm:w-[80%] xl:w-[1000px] m-auto'>
                <img src={circle} alt="" className='block x450:hidden xl:block p-[30px]' data-aos = 'fade-up'/>

                <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-[20px]' data-aos = 'fade-up'>
                    <div>
                        <a href='https://t.me/JasXDev' target='_blank' className='bg-[#151030] py-3 w-full rounded-xl outline-none text-white shadow-md shadow-[#050816] active:scale-90 justify-center flex items-center gap-[8px]'>
                            <span className=' tracking-wider'>Join our Channel | JasX</span> 

                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2aabee"/><stop offset="100%" stop-color="#229ed9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"/><path fill="#fff" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"/></svg>
                        </a>
                    </div>

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