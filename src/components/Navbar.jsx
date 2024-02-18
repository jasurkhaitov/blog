import React, {useState } from "react";
import { menuNav } from "../assets/constant/constant";
import LogoImg from '../assets/img/logo.png'
import { style } from "../assets/constant/style";
import Resume from '../assets/Jasurbek_Xaitov_CV.pdf'

export default function Navbar() {

  const [barsClass, setBarsClass] = useState('block')
  const [closeClass, setCloseClass] = useState('hidden') 
  const [navbar, setNavbar] = useState('delay-200 duration-150')
  const [right, setRight] = useState('right-[-500px] delay-200 duration-150')
  const [background, setBackground] = useState('delay-200 duration-150')

  const handleChangeBras = () => {
    if(barsClass === 'hidden') {
      document.body.style.overflow = ''
      setBarsClass('block')
    } else {
      document.body.style.overflow = 'hidden'
      setBarsClass('hidden')
    }

    closeClass === 'hidden' ? setCloseClass('block') : setCloseClass('hidden')

    navbar === 'delay-200 duration-150' ? setNavbar('bg-FmodalBackgroundColor delay-250 duration-150') : setNavbar('delay-200 duration-150')
    right === 'right-[-500px] delay-200 duration-150' ? setRight('right-0 delay-200 duration-150') : setRight('right-[-500px] delay-200 duration-150')

    if(background === 'delay-200 duration-150') {
      setBackground('delay-200 duration-150 w-full')
    } else {
      setBackground('delay-200 duration-150')
    }
  }

  const handleNavbar = (event) => {
    if(event.target.id === 'resNavbar') {
      setRight('right-[-500px] delay-200 duration-150')
      setBackground('delay-200 duration-150')
      setBarsClass('block')
      setCloseClass('hidden')
      setNavbar('delay-200 duration-150')
      document.body.style.overflow = ''
    }
  }

  const handleClickMenu = (element) => {
    document.querySelector(`.${element.slug}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="bg-[#0a101e] bg-opacity-1 z-110 md:bg-opacity-[0.93] m-auto px-[15px] py-[15px] md:py-[20px] md:px-[0px] fixed w-full top-0 z-20">

      <div className="container m-auto flex items-center justify-between">

        <div className="flex items-center justify-between cursor-pointer w-full md:w-auto">

          <div className="w-[40px] md:w-[50px]">
            <a href="/">
              <img src={LogoImg} className="" alt="Logo Portfolio"/> 
            </a>
          </div>

        </div>

        <div className={`md:hidden cursor-pointer`} onClick={handleChangeBras}>
          <svg xmlns="http://www.w3.org/2000/svg" className={barsClass} width={40} height={40} viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14"></path></svg>

          <svg xmlns="http://www.w3.org/2000/svg" className={closeClass} width={40} height={40} viewBox="0 0 512 512"><path fill="white" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"></path></svg>
        </div>

        <ul id="navbarList" className="md:flex items-center gap-[20px] md:gap-[30px] lg:gap-[40px] hidden">
          {
            menuNav.map((element, value) => {
              return <li key={element.value} className={`text-center pb-[2px] px-[4px] border-b-2 cursor-pointer text-base font-medium delay-100 duration-150 hover:text-Pyellow hover:delay-100 hover:duration-150 text-white border-transparent`} onClick={() => handleClickMenu(element)} >{element.linkName}</li>
            })
          }

          <a href={Resume} download='Jasurbek_Xaitov_CV' className={`${style.button} hidden lg:block active:scale-90`}>
            <span className="text-base font-medium text-gray ">Download CV</span>
            <i class="fa-solid fa-download text-[18px] ml-[7px] text-gray"></i>
          </a>
          
        </ul>

      </div>

      <div id="resNavbar" className={`${navbar} ${background} h-full top-[70px] md:top-[90px] fixed right-0 m-0 p-0 z-111`} onClick={handleNavbar}>
        <div className={`${right} absolute h-full w-[320px] top-[0px] bg-[#0a101e] flex flex-col items-center justify-between pt-[30px] pb-[100px] z-0`}>
          <ul className="flex flex-col gap-[20px]">

            {
              menuNav.map((element, value) => {
                return <li key={element.value} className={`text-center pb-[2px] px-[4px] border-b-2 cursor-pointer text-base font-medium delay-100 duration-150 hover:text-Pyellow hover:delay-100 hover:duration-150 text-white border-transparent`} onClick={() => handleClickMenu(element)} >{element.linkName}</li>
              })
            }

            <a href={Resume} download='Jasurbek_Xaitov_CV' className={`${style.button} mt-[20px] active:scale-90`}>
              <span className="text-base font-medium text-[#343a40]">Download CV</span>
              <i class="fa-solid fa-download text-[18px] ml-[7px] text-[#343a40]"></i>
            </a>

          </ul>
        </div>
      </div>

    </nav>
  );
}