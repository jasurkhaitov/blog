import React from "react";
import { style } from "../assets/constant/style";
import pcImg from "../assets/img/PC.png";
import { Icon } from "@iconify/react";

export default function Header() {


  return (
    <header className="pt-[100px] md:pt-[140px] pb-[50px] md:pb-[100px] bg-headerBackground bg-center bg-no-repeat bg-cover md:px-[50px] lg:px-[100px]">
      <div className="container m-auto">
        <div className="px-[20px] md:px-[0px] flex gap-3 md:gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-[130px] md:h-[210px] lg:h-[230px] violet-gradient" />
          </div>

          <div className="mt-[10px] lg:mt-[0px]">
            <h1 className={`${style.heroHeadText} text-white`}>
              {" "}
              Hi, I'm <span className="text-[#915EFF]">Jasur</span>{" "}
            </h1>
            <p className={`${style.heroSubText} text-white-100`}>
              {" "}
              Frontend Developer{" "}
            </p>

            <div className="relative z-10 md:flex justify-center items-center gap-[20px] px-[12px] py-[12px] bg-[#101624] mt-[15px] rounded-[50px] border-[1px] border-[#232935] hidden">

              <a href="https://www.linkedin.com/in/jasur-xaitov-181164250!" className={`${style.aHrefLink}`} >
                <Icon icon="skill-icons:linkedin" color="blue" width={25}/>
                <span className={`${style.spanLink}`}>
                  Linkedln
                </span>
              </a>

              <a
                href="https://github.com/jasurkhaitov"
                className={`${style.aHrefLink}`}
              >
                <Icon icon="fa:github-square" color="white" width="25" />
                <span className={`${style.spanLink}`}>GitHub</span>
              </a>

              <a
                href="https://t.me/jasurkhaitov"
                className={`${style.aHrefLink}`}
              >
                <Icon icon="logos:telegram" color="blue" width="25" />
                <span className={`${style.spanLink}`}>Telegram</span>
              </a>

              <a
                href="mailto:xaitovjasur0@gmail.com!"
                className={`${style.aHrefLink}`}
              >
                <Icon icon="logos:google-gmail" color="blue" width="25" />
                <span className={`${style.spanLink}`}>Email</span>
              </a>
            </div>
          </div>
        </div>

        <img
          src={pcImg}
          className="px-[5px] md:px-[0px] m-auto w-full mt-[40px] md:mt-[75px] xl:w-4/5 2xl:w-3/4"
          alt=""
        />

        <ul className="flex justify-center items-center gap-[30px] mt-[75px] md:hidden">
          <a href="https://www.linkedin.com/in/jasur-xaitov-181164250!">
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
