import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { linkEdu } from '../assets/constant/constant';

export default function Resume() {

    const [hoverEdu, sethoverEdu] = useState(false)
    const [hoverContact, sethoverContact] = useState(false)

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)

  return (
    <div className="About pt-[30px] sm:pt-[40px] md:pt-[70px] pb-[50px] bg-[#0a101e]">
        <div className='container m-auto'>

            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>About me</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>About me</p>
            </div>

            <div className='grid grid-cols-1 px-[15px] xls:px-[15px] sm:pl-[75px] md:pl-0 md:grid-cols-2 gap-[75px] md:gap-[20px] lg:gap-[50px] mt-[50px] w-full xl:w-[80%] m-auto'>

                <div className='flex flex-col gap-[25px]' data-aos = 'fade-up'>
                    <div className='flex items-center gap-[15px] xls:gap-[20px] lg:gap-[30px]'>
                        <Icon icon="mdi:education-outline" className={`${hoverEdu ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'}`} width="50" />
                        <h3 className='text-[#fdfeff] text-[33px] lg:text-[36px] font-medium'>Education</h3>
                    </div>

                    <div className='flex items-center h-full gap-[20px] xls:gap-[30px] lg:gap-[50px] ml-[20px]' onMouseEnter={() => sethoverEdu(!hoverEdu)} onMouseLeave={() => sethoverEdu(!hoverEdu)}>
                        <div className="flex flex-col h-full justify-center items-center">
                            <div className={`${hoverEdu ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] border-[#232935] duration-200'} w-[13px] h-[13px] rounded-full border-[2px] duration-200`}/>
                            <div className={`${hoverEdu ? 'bg-[#fec544] duration-200 ' : 'bg-[#101624] duration-200'} w-[1px] h-full bg-[#232935] duration-200`} />
                            <div className={`${hoverEdu ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] duration-200 border-[#232935]'} w-[13px] h-[13px] rounded-full border-[2px]`} />
                        </div>

                        <div className='py-[10px]'>
                            <div className='mb-[30px]'>
                                <h4 className='text-[#fec544] text-[20px] xs:text-[22px] xls:text-[24px] font-medium'>Bachelor of Software Engineering</h4>
                                <p className='text-[#a9adb8] text-[16px] xls:text-[18px] font-medium mb-[10px]'><i class="fa-solid fa-calendar-days mr-[5px]"></i> 2022 - 2026</p>
                                <p className='text-[18px] xls:text-[20px] font-medium text-[#fdfeff]'><a href="https://inha.uz" target='_blank' className='cursor-pointer'>INHA</a> university at Tashkent</p>
                            </div>

                            <div className='mb-[30px]'>
                                <h4 className='text-[#fec544] text-[20px] xs:text-[22px] xls:text-[24px] font-medium mb-[20px] capitalize'>Language</h4>
                                <p className='text-[#a9adb8] text-[18px] font-medium'>Uzbek</p>
                                <p className='text-[#a9adb8] text-[18px] font-medium'>English (B2)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[25px]' data-aos = 'fade-up'>
                    <div className='flex items-center gap-[20px] lg:gap-[30px]'>
                        <Icon icon="fluent-mdl2:contact-link" className={`${hoverContact ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="40"  />
                        <h3 className='text-[#fdfeff] text-[33px] lg:text-[36px] font-medium'>Contact</h3>
                    </div>

                    <div className='flex items-center h-full gap-[30px] lg:gap-[50px] ml-[17px]' onMouseEnter={() => sethoverContact(!hoverContact)} onMouseLeave={() => sethoverContact(!hoverContact)}>
                        <div className="flex flex-col h-full justify-center items-center">
                            <div className={`${hoverContact ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] border-[#232935] duration-200'} w-[13px] h-[13px] rounded-full border-[2px] duration-200`}/>
                            <div className={`${hoverContact ? 'bg-[#fec544] duration-200 ' : 'bg-[#101624] duration-200'} w-[1px] h-full bg-[#232935] duration-200`} />
                            <div className={`${hoverContact ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] duration-200 border-[#232935]'} w-[13px] h-[13px] rounded-full border-[2px]`} />
                        </div>

                        <div className='py-[10px] flex flex-col gap-[15px]'>
                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setOne(!one)} onMouseLeave={() => setOne(!one)}>
                                <a target='_blank' href="mailto:xaitovjasur0@gmail.com!">
                                    <Icon icon="clarity:email-solid" className={`${one ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="35" />
                                </a>

                                <a target='_blank' href="mailto:xaitovjasur0@gmail.com!" className={`${one ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium hidden xs:block`}>
                                    xaitovjasur0@gmail.com
                                </a>

                                <a target='_blank' href="mailto:xaitovjasur0@gmail.com!" className={`${one ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium block xs:hidden`}>
                                    Email
                                </a>
                           </div>

                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setTwo(!two)} onMouseLeave={() => setTwo(!two)}>
                                <a target='_blank' href="tel:+998880751610">
                                    <i className={`${two ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 fa-solid fa-phone fa-shake text-[30px]`}></i>
                                </a>

                                <a target='_blank' href="tel:+998880751610" className={`${two ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium hidden xs:block`}>
                                    +998 88 075 16 10
                                </a>

                                <a target='_blank' href="tel:+998880751610" className={`${two ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium block xs:hidden`}>
                                    Call
                                </a>
                           </div>

                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setThree(!three)} onMouseLeave={() => setThree(!three)}>
                                <a target='_blank' href="https://www.google.com/maps/place/Labzak/@41.3314824,69.2648064,19z/data=!4m6!3m5!1s0x38ae8bce910fcbcf:0x170b3f3285c6d142!8m2!3d41.3314824!4d69.2657673!16s%2Fg%2F11pz0kl61v?entry=ttu">
                                    <Icon icon="ion:location-sharp" className={`${three ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="35" />
                                </a>

                                <a target='_blank' href="https://www.google.com/maps/place/Labzak/@41.3314824,69.2648064,19z/data=!4m6!3m5!1s0x38ae8bce910fcbcf:0x170b3f3285c6d142!8m2!3d41.3314824!4d69.2657673!16s%2Fg%2F11pz0kl61v?entry=ttu" className={`${three ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium hidden xs:block`}>
                                    Tashkent Region, Shayxontohur district
                                </a>

                                <a target='_blank' href="https://www.google.com/maps/place/Labzak/@41.3314824,69.2648064,19z/data=!4m6!3m5!1s0x38ae8bce910fcbcf:0x170b3f3285c6d142!8m2!3d41.3314824!4d69.2657673!16s%2Fg%2F11pz0kl61v?entry=ttu" className={`${three ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium block xs:hidden`}>
                                    Location
                                </a>
                           </div>

                            <div className='mt-[20px]'>
                                <h4 className='text-[#fec544] text-[22px] xls:text-[24px] font-medium mb-[10px]'>My social profile</h4>

                                <div className="flex items-center gap-[20px] w-auto">

                                    {
                                        linkEdu.map((element, value) => {
                                            return (
                                                <a target='_blank' href={element.linkUrl} value={element.value} className={`px-[15px] rounded-[10px] py-[7px] bg-[#070d1b] border-[0.5px] border-[#3f4551] flex items-center justify-start gap-[13px] hover:cursor-pointer`}>
                                                    <div className="w-[25px]">
                                                        <Icon icon={element.iconType} color={element.iconColor} width={25}/>
                                                    </div>

                                                    <span className={`text-base font-semibold text-white xs:block hidden`}>{element.nameContact}</span>
                                                </a>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}