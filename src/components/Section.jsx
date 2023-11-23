import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import portfolio from '../assets/projectimg/portfolio.png'
import travlog from '../assets/projectimg/travlog.png'

export default function Section() {

    const [hoveredOne, setHoveredOne] = useState(false)
    const [hoveredTwo, setHoveredTwo] = useState(false)

  return (
    <div className='pb-[50px] sm:pb-[80px] md:pb-[100px] bg-[#0a101e]'>
        <div className="container m-auto">

            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>Project</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>Project</p>
            </div>

            <div className='p-[15px] sm:px-0 sm:w-[90%] xl:w-[80%] 2xl:w-[70%] m-auto text-center' data-aos = 'fade-up'>
                <p className='text-white text-md sm:text-lg lg:text-xl font-medium'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            </div>

            <div className='grid grid-cols-1 px-[15px] sm:px-0 w-full sm:w-[80%] md:w-full xls:w-full lg:grid-cols-2 gap-[30px] lg:w-[90%] xl:gap-[50px] xl:w-[1000px] m-auto mt-[50px]'>

                <div className='bg-[#161031] p-[15px] sm:p-[20px] rounded-2xl grid md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-5 items-center' data-aos = 'fade-up'>

                    <div className='w-auto md:w-[330px] lg:w-auto h-[140px] x310:h-[150px] x350:h-[170px] xs:h-[190px] sm:h-[270px] xls:h-[260px] md:h-[230px] lg:h-[250px] overflow-y-hidden rounded-2xl' onMouseEnter={() => setHoveredOne(true)} onMouseLeave={() => setHoveredOne(false)}>
                        <div className='hover:cursor-pointer'>
                            <img src={portfolio} className={`${hoveredOne ? 'transition-transform duration-[5s] ease-[ease-in-out] delay-[0s] translate-y-[-65%]' : 'transition-transform duration-[5s] ease-[ease-in-out] delay-[0s] translate-y-[0%]'} w-full rounded-2xl`} alt="" />
                        </div>
                    </div>

                    <div>
                        <h2 className='text-[24px] sm:text-[28px] font-[600] sm:font-bold text-white'>Portfolio</h2>
                        <p className='mt-1 lg:mt-2 text-[#aaa6c3] font-[600] text-[14px] sm:text-[16px]'>This is a my portfolio project with responsive design where you can see all my skills, projects andcontact information. Design taked from figma community.</p>

                        <div className='flex items-center gap-[10px] mt-[10px]'>
                            <p className='text-[#fd7e14] text-[17px] font-medium'>#tailwindcss</p>
                            <p className='text-[#228be6] text-[17px] font-medium'>#reactjs</p>
                        </div>

                        <div className='mt-[20px] md:mt-[10px] lg:mt-[30px] flex items-center justify-between xls:justify-evenly'>
                            <a href='https://www.jasurkhaitov.uz/' className='button-85 flex items-center justify-center gap-2' role="button">
                                <span className='text-[17px] font-bold text-white'>Live Demo</span>
                                <Icon icon="fa6-solid:arrow-up-right-from-square" color="white" width="15" />
                            </a>

                            <a href='https://github.com/jasurkhaitov/Portfolio' className='button-85 flex items-center justify-center gap-2' role="button">
                                <span className='text-[17px] font-bold text-white'>Code</span>
                                <Icon icon="foundation:social-github" color="white" width="20" />
                            </a>
                        </div>
                    </div>

                </div>  

                <div className='bg-[#161031] p-[15px] sm:p-[20px] rounded-2xl grid md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-5 items-center' data-aos = 'fade-up'>

                    <div className='w-auto md:w-[330px] lg:w-auto h-[140px] x310:h-[150px] xs:h-[190px] sm:h-[270px] xls:h-[260px] md:h-[240px] lg:h-[250px] x350:h-[170px] overflow-y-hidden rounded-2xl' onMouseEnter={() => setHoveredTwo(true)} onMouseLeave={() => setHoveredTwo(false)}>
                        <a href="https://travlog-eosin.vercel.app/" className=''>
                            <img src={travlog} className={`${hoveredTwo ? 'transition-transform duration-[5s] ease-[ease-in-out] delay-[0s] translate-y-[-81%]' : 'transition-transform duration-[5s] ease-[ease-in-out] delay-[0s] translate-y-[0%]'} w-full rounded-2xl`} alt="" />
                        </a>
                    </div>

                    <div>
                        <h2 className='text-[24px] sm:text-[28px] font-[600] sm:font-bold text-white'>Travlog</h2>
                        <p className='mt-1 lg:mt-2 text-[#aaa6c3] font-[600] text-[14px] sm:text-[16px]'>Landing page website for travel agency that offers whole range of tour services.With magnificient images and user-friendly design with responsiveness.</p>

                        <div className='flex items-center gap-[10px] mt-[10px]'>
                            <p className='text-[#fd7e14] text-[17px] font-medium'>#materialui</p>
                            <p className='text-[#228be6] text-[17px] font-medium'>#reactjs</p>
                        </div>

                        <div className='mt-[20px] md:mt-[10px] lg:mt-[30px] flex items-center justify-between xls:justify-evenly'>
                            <a href='https://travlog-eosin.vercel.app/' className='button-85 flex items-center justify-center gap-2' role="button">
                                <span className='text-[17px] font-bold text-white'>Live Demo</span>
                                <Icon icon="fa6-solid:arrow-up-right-from-square" color="white" width="15" />
                            </a>

                            <a href='https://github.com/jasurkhaitov/Travlog' className='button-85 flex items-center justify-center gap-2' role="button">
                                <span className='text-[17px] font-bold text-white'>Code</span>
                                <Icon icon="foundation:social-github" color="white" width="20" />
                            </a>
                        </div>
                    </div>

                </div>  

            </div>

        </div>
    </div>
  )
}