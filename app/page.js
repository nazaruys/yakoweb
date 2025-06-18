"use client";
import Navbar from "./components/Navbar";
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Home() {
  
  const openCalendly = () => {
    const url = 'https://calendly.com/nazar_yakov/yakoweb';
    const width = 700;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    window.open(
      url,
      'Calendly',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    )
  };
  return (
    <>
      <title>YakoWeb | Turn visitors into customers and website overwhelm into a distant memory.</title>
      <div
        className="font-manrope bg-background"
      >
        <Navbar/>
        {/* Hero */}
        <section
           className="relative z-10 aspect-[1920/1400] flex flex-col items-center pt-[200px]
              bg-[url('/backgrounds/hero.png')] bg-no-repeat bg-top
              bg-[length:220%_auto] sm:bg-[length:130%_auto] md:bg-[length:100%_auto]"
        >
          {/* Badge */}
          <div
            className="gap-5 h-[25px] bg-white flex flex-row justify-between items-center relative rounded-3xl px-[20px] md:px-[30px]"
          >
            <div className="w-[10px] h-[10px]">
              <div className="pulsating-circle"></div>
            </div>
            <span className="text-[12px] font-semibold">2 spots left for July</span>
          </div>
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl xl:text-[52px] font-bold text-center leading-[110%] bg-gradient-to-r from-[#523C79] via-black to-[#523C79] bg-clip-text text-transparent mt-3"
          >
            Custom websites<br/>built to convert
          </h1>
          {/* Subtitle */}
          <h3
            className="text-center text-[14px] md:text-[16px] font-semibold text-dark/80 max-w-[320px] mt-3 lg:mt-5"
          >
            Turn visitors into customers and website overwhelm into a distant memory.
          </h3>
          {/* Buttons */}
          <div
            className="flex flex-row gap-4 mt-8"
          >
            {/* Button 1 */}
            <a
              href="https://calendly.com/nazar_yakov/yakoweb"
              target="_blank"
              className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
            >
              <div
                className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
              >
                {/* Sharp front text */}
                <span
                  className="text-white text-[15px] font-semibold"
                >
                  Book an Intro Call
                  {/* Pick your package */}
                </span>
                <span
                  className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                  aria-hidden="true"
                >
                  Book an Intro Call
                  {/* Pick your package */}
                </span>

              </div>
            </a>
            {/* Button 2 */}
            {/* <a
              href="#"
              className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] border-[6px] border-[#7853B6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
            >
              <div
                className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
              >
                <span
                  className="text-[#7853B6] transition-colors duration-300 ease-in-out text-[15px] font-semibold"
                >
                  Or book a call
                </span>
              </div>
            </a> */}
          </div>
          {/* Screens */}
          <div
            className="flex w-full flex-col lg:flex-row justify-between gap-y-32 items-center lg:px-44 mt-[120px] select-none"
          >
            {/* First */}
            <div className="relative w-fit">
              <img
                src="/images/EK-secondary.png"
                alt="EK Logo Secondary"
                className="absolute bottom-5 hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-0 hover:z-20"
              />
              <img
                src="/images/EK-primary.png"
                alt="EK Logo Primary"
                className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[-8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-10"
              />
            </div>

            {/* Second */}
            <div className="relative w-fit">
              <img
                src="/images/BaCu-secondary.png"
                alt="EK Logo Secondary"
                className="absolute bottom-5 hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[6deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-10"
              />
              <img
                src="/images/BaCu-primary.png"
                alt="EK Logo Primary"
                className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[-7deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-0 hover:z-20"
              />
            </div>
            {/* Third */}
            <div className="relative w-fit">
              <img
                src="/images/PickFast-secondary.png"
                alt="EK Logo Secondary"
                className="absolute hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[-12deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-0 hover:z-20"
              />
              <img
                src="/images/PickFast-primary.png"
                alt="EK Logo Primary"
                className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[12deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-10"
              />
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer
          className="hidden relative z-0 aspect-[1426/344] mt-[30vh] sm:flex px-44 flex-col-reverse bg-[url('/backgrounds/footer.png')] bg-[length:100%_auto] bg-no-repeat bg-bottom"
        >
          {/* Below */}
          <div
            className="flex flex-row justify-between items-center py-6 font-medium text-dark text-[14px]"
          >
            <span>Copyright © 2025 YakoWeb</span>
            <span className="text-xs">We’re building this page section by section. Check back soon!</span>
            <div
              className="flex flex-row gap-3"
            >
              <a href={null} className="text-dark/70">EN</a>
              <div className="w-[1px] h-[28px] bg-dark"></div>
              <a>NL</a>
            </div>
          </div>
          {/* Line */}
          <div className="w-full h-[1px] bg-dark" />
          {/* Above */}
          <div
            className="mb-8 flex flex-row justify-between items-center font-medium text-dark text-[14px]"
          >
            <div
              className="flex flex-row gap-7"
            >
              <img src="/logos/YakoWeb.svg" alt="Logo" className="w-[130px] h-auto select-none" draggable="false" />
              <span className="max-w-[300px]">Convert strangers into customers and website overwhelm into a distant memory.</span>
            </div>
            <div
              className="flex flex-row gap-7"
            >
              <a href="mailto:hello@yakoweb.com" className="max-w-[300px] hover:text-black transition-all duration-200">hello@yakoweb.com</a>
              <div
                className="flex flex-row gap-3"
              >
                <a href="#" className="group">
                  <XLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a href="#" className="group">
                  <InstagramLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a href="#" className="group">
                  <FacebookLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a href="#" className="group">
                  <LinkedinLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
