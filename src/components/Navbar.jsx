import React, { useState } from "react";
import { menuNav } from "../assets/constant/constant";
import LogoImg from '../assets/img/logo.png'
import { style } from "../assets/constant/style";
import Resume from '../assets/Jasurbek_Xaitov_CV.pdf'

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState('Home')
  const [barsClass, setBarsClass] = useState('')
  const [navbar, setNavbar] = useState('delay-200 duration-150')
  const [right, setRight] = useState('right-[-500px] delay-200 duration-150')

  const handleChangeBras = () => {
    barsClass === '' ? setBarsClass('open') : setBarsClass('')
    navbar === 'delay-200 duration-150' ? setNavbar('bg-FmodalBackgroundColor delay-250 duration-150') : setNavbar('delay-200 duration-150')
    right === 'right-[-500px] delay-200 duration-150' ? setRight('right-0 delay-200 duration-150') : setRight('right-[-500px] delay-200 duration-150')
  } 

  return (
    <nav className="bg-[#0a101e] bg-opacity-1 z-110 md:bg-opacity-[0.93] m-auto px-[15px] py-[15px] md:py-[20px] md:px-[0px] fixed w-full top-0 z-[20]">

      <div className="container m-auto flex items-center justify-between">

        <div className="flex items-center justify-between cursor-pointer w-full md:w-auto">

          <div className="w-[40px] md:w-[50px]">
            <img src={LogoImg} className="" alt="Logo Portfolio"/> 
          </div>
          
          <div className={`${barsClass} block md:hidden`} id="closeBars" onClick={handleChangeBras}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        <ul className="md:flex items-center gap-[20px] md:gap-[30px] lg:gap-[40px] hidden">
          {
            menuNav.map((element, value) => {
              return <li key={element.value} className={`${activeMenu === element.linkName ? 'text-Pyellow text-center border-Pyellow' : 'text-center border-transparent text-white'} pb-[2px] px-[4px] border-b-2 cursor-pointer text-base font-medium delay-100 duration-150 hover:text-Pyellow hover:delay-100 hover:duration-150`} onClick={() => setActiveMenu(element.linkName)} >{element.linkName}</li>
            })
          }

          <a href={Resume} download='Jasurbek_Xaitov_CV' className={`${style.button} hidden lg:block`}>
            <span className="text-base font-medium text-PblackColor">Download CV</span>
            <i class="fa-solid fa-download text-[18px] ml-[7px]"></i>
          </a>
          
        </ul>

      </div>

      <div className={`${navbar} h-full w-[full] top-[70px] md:top-[90px] fixed left-0 right-0 m-0 p-0 z-111`}>
        <div className={`${right} absolute h-full w-[320px] top-[0px] bg-[#0a101e] flex flex-col items-center justify-between pt-[30px] pb-[100px] z-0`}>
          <ul className="flex flex-col gap-[20px]">

            {
              menuNav.map((element, value) => {
                return <li key={element.value} className={`${activeMenu === element.linkName ? 'text-Pyellow text-center' : 'text-center text-white'} cursor-pointer text-base font-medium delay-100 duration-150 hover:text-Pyellow hover:delay-100 hover:duration-150`} onClick={() => setActiveMenu(element.linkName)} >{element.linkName}</li>
              })
            }

            <a href={Resume} download='Jasurbek_Xaitov_CV' className={`${style.button} mt-[20px]`}>
              <span className="text-base font-medium text-PblackColor">Download CV</span>
              <i class="fa-solid fa-download text-[18px] ml-[7px]"></i>
            </a>

          </ul>
        </div>
      </div>

    </nav>
  );
}