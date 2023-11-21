import React, { useEffect, useState } from "react";
import { style } from "../assets/constant/style";
import pcImg from "../assets/img/PC.png";
import { Icon } from "@iconify/react";
import Aos from 'aos'
import 'aos/dist/aos'
import { TypeAnimation } from 'react-type-animation';
import { linkContact } from "../assets/constant/constant";

export default function Header() {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])

  const [activeUl, setActiveUl] = useState('Linkedln')

  return (
    <header className="pt-[100px] md:pt-[140px] pb-[50px] md:pb-[100px] bg-headerBackground bg-center bg-no-repeat bg-cover md:px-[50px] lg:px-[100px] z-10">
      <div className="container m-auto">
        <div className="px-[20px] md:px-[0px] flex gap-3 md:gap-5" data-aos = 'fade-down'>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-[130px] md:h-[230px] lg:h-[230px] violet-gradient" />
          </div>

          <div className="mt-[10px] lg:mt-[0px]">
            <h1 className={`${style.heroHeadText} text-white`}>    
              Hi, I'm <span className="text-[#915EFF]">Jasur</span>
            </h1>

            <TypeAnimation sequence={['Frontend Developer', 1000, 'React Developer', 1000]} wrapper="span" speed={50} className={`${style.heroSubText} text-white-100`} repeat={Infinity} />

            <div className="md:flex justify-center items-center gap-[20px] px-[12px] py-[12px] bg-[#101624] mt-[20px] rounded-[50px] border-[1px] border-[#232935] hidden">

              {
                linkContact.map((element, value) => {
                  return (
                    <a href={element.linkUrl} value={element.value} className={`${activeUl !== element.nameContact ? 'max-w-[55px] !overflow-hidden px-[15px] transition-all duration-[0.4s] ease-[ease]' : 'px-[15px] transition-all duration-[0.4s] ease-[ease] !overflow-visible max-w-[140px]'} rounded-[50px] transition-all duration-[0.4s] ease-[ease] py-[10px] bg-[#070d1b] border-[0.5px] border-[#3f4551] flex items-center justify-start gap-[13px] hover:cursor-pointer`} onMouseEnter={() => setActiveUl(element.nameContact)}>
                      <div className="w-[25px]">
                        <Icon icon={element.iconType} color={element.iconColor} width={25}/>
                      </div>
                      <span className={`${activeUl !== element.nameContact ? 'opacity-[0] transition-all duration-[0.4s] ease-[ease]' : 'transition-all duration-[0.4s] ease-[ease] opacity-[1]'} text-base font-semibold text-white`}>{element.nameContact}</span>
                    </a>
                  )
                })
              }
              
            </div>
          </div>
        </div>

        <img
          src={pcImg}
          className="px-[5px] md:px-[0px] m-auto w-full mt-[40px] md:mt-[75px] xl:w-4/5 2xl:w-3/4"
          alt="" data-aos = 'fade-up'
        />

        <ul className="relative z-1 flex justify-center items-center gap-[30px] mt-[75px] md:hidden">
          <a href="https://www.linkedin.com/in/jasurbek-xaitov-1a8484268/">
            <Icon icon="skill-icons:linkedin" color="blue" width="35" />
          </a>

          <a href="https://github.com/jasurkhaitov">
            <Icon icon="fa:github-square" color="white" width="35" />
          </a>

          <a href="https://t.me/jasurkhaitov">
            <Icon icon="logos:telegram" color="blue" width="35" />
          </a>

          <a href="mailto:xaitovjasur0@gmail.com">
            <Icon icon="logos:google-gmail" color="blue" width="35" />
          </a>

        </ul>
      </div>
    </header>
  );
}
