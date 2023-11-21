import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { linkContact } from '../assets/constant/constant';

export default function Resume() {

    const [hoverEdu, sethoverEdu] = useState(false)
    const [hoverContact, sethoverContact] = useState(false)

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)

  return (
    <div className='pb-[50px] sm:pb-[80px] md:pb-[100px] bg-[#0a101e]'>
        <div className='container m-auto'>

            <div className='relative w-full' data-aos = 'fade-up'>
                <p className='text-[#151b2980] text-[45px] sm:text-[80px] lg:text-[90px] xl:text-[100px] font-bold text-center uppercase'>About me</p>
                <p className='text-[#fec544] text-[20px] sm:text-[25px] lg:text-[30px] font-bold absolute top-[14px] sm:top-[25px] lg:top-[30px] left-1/2 translate-x-[-50%] pt-0 px-[10px] border-b-2 border-b-[#fec544] uppercase'>About me</p>
            </div>

            <div className='grid grid-cols-2 gap-[50px] mt-[50px] w-[80%] m-auto'>

                <div className='flex flex-col gap-[25px]' data-aos = 'fade-right'>
                    <div className='flex items-center gap-[30px]'>
                        <Icon icon="mdi:education-outline" className={`${hoverEdu ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'}`} width="60" />
                        <h3 className='text-[#fdfeff] text-[36px] font-medium'>Education</h3>
                    </div>

                    <div className='flex items-center h-full gap-[50px] ml-[20px]' onMouseEnter={() => sethoverEdu(!hoverEdu)} onMouseLeave={() => sethoverEdu(!hoverEdu)}>
                        <div className="flex flex-col h-full justify-center items-center">
                            <div className={`${hoverEdu ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] border-[#232935] duration-200'} w-[13px] h-[13px] rounded-full border-[2px] duration-200`}/>
                            <div className={`${hoverEdu ? 'bg-[#fec544] duration-200 ' : 'bg-[#101624] duration-200'} w-[1px] h-full bg-[#232935] duration-200`} />
                            <div className={`${hoverEdu ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] duration-200 border-[#232935]'} w-[13px] h-[13px] rounded-full border-[2px]`} />
                        </div>

                        <div className='py-[10px]'>
                            <div className='mb-[30px]'>
                                <h4 className='text-[#fec544] text-[24px] font-medium'>Bachelor of Computer Science</h4>
                                <p className='text-[#a9adb8] text-[18px] font-medium mb-[10px]'>2022 - 2026</p>
                                <p className='text-[20px] font-medium text-[#fdfeff]'>INHA university at Tashkent</p>
                            </div>

                            <div className='mb-[30px]'>
                                <h4 className='text-[#fec544] text-[24px] font-medium mb-[20px] capitalize'>Language</h4>
                                <p className='text-[#a9adb8] text-[18px] font-medium'>Uzbek</p>
                                <p className='text-[#a9adb8] text-[18px] font-medium'>English (B2)</p>
                            </div>

                            <div>
                                <h4 className='text-[#fec544] text-[24px] font-medium mb-[20px]'>Visite my social profile</h4>

                                <div className="flex justify-center items-center gap-[20px] px-[10px] py-[5px] bg-[#101624] rounded-[50px] border-[1px] border-[#232935]">

                                    {
                                        linkContact.map((element, value) => {
                                            return (
                                                <a href={element.linkUrl} value={element.value} className={`max-w-[55px] px-[15px] ease-[ease] !overflow-visible max-w-[140px]'} rounded-[50px] transition-all duration-[0.4s] ease-[ease] py-[10px] bg-[#070d1b] border-[0.5px] border-[#3f4551] flex items-center justify-start gap-[13px] hover:cursor-pointer`}>
                                                    <div className="w-[25px]">
                                                        <Icon icon={element.iconType} color={element.iconColor} width={25}/>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-[25px]' data-aos = 'fade-left'>
                    <div className='flex items-center gap-[30px]'>
                        <Icon icon="fluent-mdl2:contact-link" className={`${hoverContact ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="50"  />
                        <h3 className='text-[#fdfeff] text-[36px] font-medium'>Contact Information</h3>
                    </div>

                    <div className='flex items-center h-full gap-[50px] ml-[17px]' onMouseEnter={() => sethoverContact(!hoverContact)} onMouseLeave={() => sethoverContact(!hoverContact)}>
                        <div className="flex flex-col h-full justify-center items-center">
                            <div className={`${hoverContact ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] border-[#232935] duration-200'} w-[13px] h-[13px] rounded-full border-[2px] duration-200`}/>
                            <div className={`${hoverContact ? 'bg-[#fec544] duration-200 ' : 'bg-[#101624] duration-200'} w-[1px] h-full bg-[#232935] duration-200`} />
                            <div className={`${hoverContact ? 'bg-[#fec544] border-[#fec544] duration-200' : 'bg-[#101624] duration-200 border-[#232935]'} w-[13px] h-[13px] rounded-full border-[2px]`} />
                        </div>

                        <div className='py-[10px] flex flex-col gap-[20px]'>
                            
                            <div className='flex items-center gap-[50px]'>
                                <div className='flex items-center gap-[30px]' onMouseEnter={() => setFive(!five)} onMouseLeave={() => setFive(!five)}>
                                    <a href="https://t.me/jasurkhaitov">
                                        <Icon icon="bi:linkedin" className={`${five ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="30" />
                                    </a>
                                </div>

                                <div className='flex items-center gap-[30px]' onMouseEnter={() => setSix(!six)} onMouseLeave={() => setSix(!six)}>
                                        <a href="https://t.me/jasurkhaitov">
                                            <Icon icon="fa-brands:github-square" className={`${six ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="30" />
                                        </a>
                                </div>

                                <div className='flex items-center gap-[30px]' onMouseEnter={() => setFour(!four)} onMouseLeave={() => setFour(!four)}>
                                    <a href="https://t.me/jasurkhaitov">
                                        <Icon icon="ic:baseline-telegram" className={`${four ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="35" />
                                    </a>
                                </div>
                            </div>

                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setOne(!one)} onMouseLeave={() => setOne(!one)}>
                                <a href="mailto:xaitovjasur0@gmail.com!">
                                    <Icon icon="clarity:email-solid" className={`${one ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="35" />
                                </a>

                                <a href="mailto:xaitovjasur0@gmail.com!" className={`${one ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium`}>
                                    xaitovjasur0@gmail.com
                                </a>
                           </div>

                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setTwo(!two)} onMouseLeave={() => setTwo(!two)}>
                                <a href="tel:+998880751610">
                                    <i className={`${two ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 fa-solid fa-phone fa-shake text-[30px]`}></i>
                                </a>

                                <a href="tel:+998880751610" className={`${two ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium`}>
                                    +998 88 075 16 10
                                </a>
                           </div>

                           <div className='flex items-center gap-[30px]' onMouseEnter={() => setThree(!three)} onMouseLeave={() => setThree(!three)}>
                                <a href="https://www.google.com/maps/place/Labzak/@41.3314824,69.2648064,19z/data=!4m6!3m5!1s0x38ae8bce910fcbcf:0x170b3f3285c6d142!8m2!3d41.3314824!4d69.2657673!16s%2Fg%2F11pz0kl61v?entry=ttu">
                                    <Icon icon="ion:location-sharp" className={`${three ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200`} width="35" />
                                </a>

                                <a href="https://www.google.com/maps/place/Labzak/@41.3314824,69.2648064,19z/data=!4m6!3m5!1s0x38ae8bce910fcbcf:0x170b3f3285c6d142!8m2!3d41.3314824!4d69.2657673!16s%2Fg%2F11pz0kl61v?entry=ttu" className={`${three ? 'text-[#fec544] duration-200' : 'text-[#a9adb8] duration-200'} duration-200 text-[19px] font-medium`}>
                                    Tashkent Region, Shayxontohur district
                                </a>
                           </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}