import React from 'react'
import HTML from "../assets/imgSkills/html.png"
import CSS from "../assets/imgSkills/css.png"
import Figma from "../assets/imgSkills/figma.png"
import Less from "../assets/imgSkills/less.png"
import Sass from "../assets/imgSkills/sass.png"
import Scss from "../assets/imgSkills/scss.png"
import bootstrap from "../assets/imgSkills/bootstrap.png"
import materialUi from "../assets/imgSkills/materialUi.png"
import tailwind from "../assets/imgSkills/tailwind.png"
import js from "../assets/imgSkills/js.png"
import jQuery from "../assets/imgSkills/jQuery.png"
import typescript from "../assets/imgSkills/typescript.png"
import react from "../assets/imgSkills/react.png"
import router from "../assets/imgSkills/react-router.png"
import redux from "../assets/imgSkills/redux.png"
import nextjs from "../assets/imgSkills/nextjs.png"
import firebase from "../assets/imgSkills/firebase.png"
import gulp from '../assets/imgSkills/gulp.png'
import git from '../assets/imgSkills/github.png'
import json from '../assets/imgSkills/json.webp'

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

          <div className='flex items-center flex-wrap justify-center gap-[30px] sm:gap-[45px] mt-[30px] sm:mt-[50px] p-[15px] sm:px-0 text-center sm:w-[85%] md:w-[90%] xl:w-[80%] m-auto' data-aos = 'fade-up'>
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={HTML} alt=""/>
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={CSS} alt=""/>
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={Figma} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={Less} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={Sass} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={Scss} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={bootstrap} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={materialUi} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={tailwind} alt="" />
            <img className='w-[20px] sm:w-[25px] md:w-[30px] h-auto lg:w-[40px]' src={gulp} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={js} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={jQuery} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[100px] h-auto' src={json} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={typescript} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={react} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={router} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={redux} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto bg-white rounded-full border-none' src={nextjs} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={firebase} alt="" />
            <img className='w-[50px] md:w-[60px] lg:w-[77px] h-auto' src={git} alt="" />
          </div>

        </div>
    </main>
  )
}