import React from 'react'
import { style } from '../assets/constant/style'
import pcImg from '../assets/img/PC.png'

export default function Header() {
  return (
    <header className='pt-[140px] pb-[100px] bg-headerBackground bg-center bg-no-repeat bg-cover lg:px-[100px]'>
      <div className='container m-auto'>

        <div className='flex gap-5'>

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-[200px] violet-gradient' />
          </div>

          <div>
            
            <h1 className={`${style.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915EFF]'>Jasur</span> </h1>
            <p className={`${style.heroSubText} my-2 text-white-100`}> Frontend Developer </p>

            <div className='bg-[#101624] w-[200px] p-[20px] rounded-[50px] border-[1px] border-[#23293]'>

            </div>

          </div>

        </div>

        <img src={pcImg} className='m-auto w-full mt-[50px] xl:w-4/5 2xl:w-3/4' alt="" />

      </div>
    </header>
  )
}