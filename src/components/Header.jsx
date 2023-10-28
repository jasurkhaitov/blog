import React from 'react'
import { style } from '../assets/constant/style'
import pcImg from '../assets/img/PC.png'

export default function Header() {
  return (
    <header className='pt-[100px] md:pt-[140px] pb-[50px] md:pb-[100px] bg-headerBackground bg-center bg-no-repeat bg-cover px-[20px] md:px-[50px] lg:px-[100px]'>
      <div className='container m-auto'>

        <div className='flex gap-3 md:gap-5'>

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-[100px] md:h-[210px] lg:h-[230px] violet-gradient' />
          </div>

          <div className='mt-[10px] lg:mt-[0px]'>

            <h1 className={`${style.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915EFF]'>Jasur</span> </h1>
            <p className={`${style.heroSubText} text-white-100`}> Frontend Developer </p>

            <ul className='md:flex justify-center items-center gap-[20px] px-[12px] py-[12px] bg-[#101624] mt-[15px] rounded-[50px] border-[1px] border-[#232935] hidden'>

              <li>
                  <a href="#!" className={`${style.aHrefLink}`}>
                    <i class={`${style.svgAlink} fa-brands fa-linkedin`}></i>
                    <span className={`${style.spanLink}`}>Linkedln</span>
                  </a>
              </li>

              <li>
                  <a href="#!" className={`${style.aHrefLink}`}>
                    <i class={`${style.svgAlink} fa-brands fa-square-github`}></i>
                    <span className={`${style.spanLink} hidden`}>GitHub</span>
                  </a>
              </li>

              <li>
                  <a href="#!" className={`${style.aHrefLink}`}>
                    <i class={`${style.svgAlink} fa-brands fa-telegram`}></i>
                    <span className={`${style.spanLink} hidden`}>Telegram</span>
                  </a>
              </li>

              <li>
                  <a href="#!" className={`${style.aHrefLink}`}>
                    <i class={`${style.svgAlink} fa-solid fa-envelope`}></i>
                    <span className={`${style.spanLink} hidden`}>Email</span>
                  </a>
              </li>

            </ul>

          </div>

        </div>

        <img src={pcImg} className='m-auto w-full mt-[40px] md:mt-[75px] xl:w-4/5 2xl:w-3/4' alt="" />

      </div>
    </header>
  )
}