"use client";
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon, ArrowSquareOutIcon, HouseIcon, CarProfileIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';

import Navbar from "../components/Navbar";
import WebsiteSlides from "../components/WebsiteSlides";
import { trackGoal } from '../utils/datafast';
import { setLangPref } from '../utils/langPref';


export default function Home() {
  const t = useTranslations('HomePage');
  const pathname = usePathname();

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    // If we're opening a question (not closing), track it
    if (openIndex !== index) {
      const faqItem = t.raw('faq.items')[index];
      const questionText = faqItem.question;
      const trackingName = questionText.toLowerCase().replace(/\?/g, '').trim().replace(/\s+/g, '_');
      trackGoal(`faq_${trackingName}`, `Open FAQ: ${questionText}`);
    }
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const navigateToRecurringPricing = () => {
    const targetId = 'faqs';
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setOpenIndex(6)
        window.scrollBy({ top: 400, behavior: 'smooth' });
      }, 800);

      trackGoal('navigate_to_recurring_pricing', 'Navigate to FAQ about recurring pricing');
    }
  };

  const changeLanguage = (lang) => {
    const langCode = lang.toLowerCase();
    setLangPref(langCode);
    
    if (lang === "NL") {
      trackGoal('set_lang_to_nl', 'Set language to NL');
    } else if (lang === "EN") {
      trackGoal('set_lang_to_en', 'Set language to EN');
    }
  }

  return (
    <div
      className="font-manrope bg-background"
    >
      <Navbar/>
      {/* Hero */}
      <section
          className="relative z-10 aspect-[1920/1400] flex flex-col items-center pt-[200px]
            bg-[url('/backgrounds/hero.webp')] bg-no-repeat bg-top
            bg-[length:220%_auto] sm:bg-[length:130%_auto] md:bg-[length:100%_auto]"
      >
        {/* Badge */}
        <div
          className="gap-5 h-[25px] bg-white flex flex-row justify-between items-center relative rounded-3xl px-[20px] md:px-[30px]"
        >
          <div className="w-[10px] h-[10px]">
            <div className="pulsating-circle"></div>
          </div>
          <span className="text-[12px] font-semibold">{t('badge')}</span>
        </div>
        {/* Title */}
        <h1
          className="text-4xl pb-1 sm:text-5xl xl:text-[52px] font-bold text-center leading-[110%] bg-gradient-to-r from-[#523C79] via-black to-[#523C79] bg-clip-text text-transparent mt-3"
          dangerouslySetInnerHTML={{ __html: t('title') }}
        />
        {/* Subtitle */}
        <h3
          className="text-center text-[14px] md:text-[16px] font-semibold text-dark/80 max-w-[320px] mt-2 lg:mt-4"
        >
          {t('subtitle')}
        </h3>
        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8"
        >
          {/* Button 1 */}
          <a
            href="#pricing"
            onClick={() => {
              trackGoal('navigate_pricing_from_hero', 'Navigate to pricing from hero');
            }}
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
            >
              {/* Sharp front text */}
              <span
                className="text-white text-[15px] font-semibold"
              >
                {t('button1')}
              </span>
              <span
                className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                aria-hidden="true"
              >
                {t('button1')}
              </span>

            </div>
          </a>
          {/* Button 2 */}
          <a
            href="https://calendly.com/nazar_yakov/yakoweb"
            onClick={() => {
              trackGoal('book_an_intro_call_hero', 'Book an intro call on hero');
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] border-[6px] border-[#7853B6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
            >
              <span
                className="text-[#7853B6] transition-colors duration-300 ease-in-out text-[15px] font-semibold"
              >
                {t('button2')}
              </span>
            </div>
          </a>
        </div>
        {/* Screens */}
        <div
          className="flex w-full flex-col lg:flex-row justify-between gap-y-32 items-center lg:px-44 mt-[120px] select-none"
        >
          {/* First */}
          <a className="relative w-fit" href="#ek-autotechniek">
            <img
              src="/images/EK-secondary.webp"
              alt="EK Logo Secondary"
              className="absolute bottom-5 hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-0 hover:z-20"
            />
            <img
              src="/images/EK-primary.webp"
              alt="EK Logo Primary"
              className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[-8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-10"
            />
          </a>

          {/* Second */}
          <a className="relative w-fit" href="#bacu-kozijnen">
            <img
              src="/images/BaCu-secondary.webp"
              alt="EK Logo Secondary"
              className="absolute bottom-5 hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[6deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-10"
            />
            <img
              src="/images/BaCu-primary.webp"
              alt="EK Logo Primary"
              className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[-7deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-0 hover:z-20"
            />
          </a>
          {/* Third */}
          <div className="relative w-fit">
            <img
              src="/images/PickFast-secondary.webp"
              alt="EK Logo Secondary"
              className="absolute hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[-12deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-0 hover:z-20"
            />
            <img
              src="/images/PickFast-primary.webp"
              alt="EK Logo Primary"
              className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[12deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-10"
            />
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section
        className="z-30 relative
          2xl:-mt-[50vh] xl:-mt-[40vh] lg:-mt-[5vh] md:mt-[20vh] sm:mt-[10vh] mt-[20vh]
          flex flex-col justify-center xl:items-start items-center
          2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
          bg-[url('/backgrounds/whyus.webp')] sm:bg-no-repeat bg-top
          bg-[length:140%_auto] sm:bg-[length:300%_auto] md:bg-[length:200%_auto] lg:bg-[length:170%_auto] xl:bg-[length:110%_auto] 2xl:bg-[length:100%_auto]
          sm:py-20 xl:pt-[24vh] xl:pb-[16vh]
        "
      >
        <h3 className="text-center text-[13px] md:text-[16px] text-dark/80 font-semibold">{t('whyUs.title')}</h3>
        <h2 className="text-center text-[28px] md:text-[32px] text-black font-bold">{t('whyUs.subtitle')}</h2>
        {/* Cards div */}
        <div
          className="w-full flex xl:flex-row flex-col items-center xl:items-start xl:justify-between sm:space-y-6 space-y-10 xl:space-y-0 mt-10"
        >
          {/* Card 1 */}
          <div
            className="2xl:min-w-[380px] 2xl:max-w-[380px] xl:min-w-[350px] xl:max-w-[350px] sm:min-w-[380px] sm:max-w-[380px] min-w-[350px] max-w-[350px] h-[320px] rounded-2xl p-[5px]"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #FFFFFD 0%,
                  #E9E2F5 80%,
                  #BBA7DF 88%,
                  #AA92D5 100%
                )
              `,
              boxShadow: `
                inset 2px 0px 3px rgba(255, 255, 255, 0.25),
                inset -2px 0px 3px rgba(0, 0, 0, 0.15),
                inset 0px -2px 3px rgba(0, 0, 0, 0.25),
                inset 0px 2px 3px rgba(255, 255, 255, 0.25)
              `
              
            }}
          >
            {/* Main container */}
            <div
              className="bg-white flex flex-col w-full h-full rounded-[12px] p-6"
              style={{
                boxShadow: `
                  inset -2px 0px 5px rgba(255, 255, 255, 0.25),
                  inset 2px 0px 5px rgba(0, 0, 0, 0.25)
                `,
                background: `
                  linear-gradient(
                    to bottom,
                    #FFFFFD 0%,
                    #FFFFFD 40%,
                    #E9E2F5 59.2%,
                    #BBA7DF 77.2%,
                    #AA92D5 100%
                  )
                `
              }}
            >
              <span className="font-semibold text-black text-[20px]">{t('whyUs.performance.title')}</span>
              <p
                className="text-[14px] font-medium text-dark mt-2"
              >
                {t('whyUs.performance.description')}
              </p>
              <div
                className="flex w-full h-full justify-center items-center"
              >
                {/* Animation */}
                <div
                  className="mt-8 px-2 flex flex-col-reverse items-center w-full font-inter"
                >
                  {/* First bottom card border */}
                  <div
                    className="z-40 bg-gradient-to-r flex justify-center items-center from-[#DEDEDE] to-[#ACACAC] w-full h-[50px] rounded-xl p-[1px]"
                  >
                    {/* Content */}
                    <div
                      className="flex flex-col justify-between bg-white w-full h-full rounded-[10px] py-2 px-4"
                    >
                      <span className="text-black text-[13px]">{t(`whyUs.performance.messages.1.text`)}</span>
                      <span className="text-dark/80 text-[10px]">{t(`whyUs.performance.messages.1.time`)}</span>
                    </div>
                  </div>
                  {/* Second bottom card border */}
                  <div
                    className="z-20 -mb-[25px] opacity-70 bg-gradient-to-r flex justify-center items-center from-[#DEDEDE] to-[#ACACAC] w-[93%] h-[45px] rounded-xl p-[1px]"
                  >
                    {/* Content */}
                    <div
                      className="flex flex-col justify-between bg-white w-full h-full rounded-[10px] py-2 px-4"
                    >
                      <span className="text-black text-[12px]">{t(`whyUs.performance.messages.2.text`)}</span>
                      <span className="text-dark/80 text-[9px]">{t(`whyUs.performance.messages.2.time`)}</span>
                    </div>
                  </div>
                  {/* Third bottom card border */}
                  <div
                    className="z-10 -mb-[28px] opacity-60 bg-gradient-to-r flex justify-center items-center from-[#DEDEDE] to-[#ACACAC] w-[83%] h-[40px] rounded-xl p-[1px]"
                  >
                    {/* Content */}
                    <div
                      className="flex flex-col justify-between bg-white w-full h-full rounded-[10px] py-2 px-4"
                    >
                      <span className="text-black text-[11px]">{t(`whyUs.performance.messages.3.text`)}</span>
                      <span className="text-dark/80 text-[8px]">{t(`whyUs.performance.messages.3.time`)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="2xl:min-w-[380px] 2xl:max-w-[380px] xl:min-w-[350px] xl:max-w-[350px] sm:min-w-[380px] sm:max-w-[380px] min-w-[350px] max-w-[350px] h-[320px] rounded-2xl p-[5px]"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #FFFFFD 0%,
                  #EBF3FF 80%,
                  #A2C5FF 88%,
                  #5B99FF 100%
                )
              `,
              boxShadow: `
                inset 2px 0px 3px rgba(255, 255, 255, 0.25),
                inset -2px 0px 3px rgba(0, 0, 0, 0.15),
                inset 0px -2px 3px rgba(0, 0, 0, 0.25),
                inset 0px 2px 3px rgba(255, 255, 255, 0.25)
              `
              
            }}
          >
            {/* Main container */}
            <div
              className="bg-white flex flex-col w-full h-full rounded-[12px] p-6"
              style={{
                boxShadow: `
                  inset -2px 0px 5px rgba(255, 255, 255, 0.25),
                  inset 2px 0px 5px rgba(0, 0, 0, 0.25)
                `,
                background: `
                  linear-gradient(
                    to bottom,
                    #FFFFFD 0%,
                    #FFFFFD 40%,
                    #EBF3FF 59.2%,
                    #A2C5FF 77.2%,
                    #5B99FF 100%
                  )
                `
              }}
            >
              <span className="font-semibold text-black text-[20px]">{t('whyUs.partnership.title')}</span>
              <p
                className="text-[14px] font-medium text-dark mt-2"
              >
                {t('whyUs.partnership.description')}
              </p>
                {/* Animation */}
                <div className="mt-8 px-2 flex flex-col w-full font-inter space-y-2">
                  {/* Received message (left) */}
                  <div className="z-20 flex flex-col items-start max-w-[180px]">
                    <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-bl-none shadow-md">
                      <span className="block text-[11px] text-dark">
                        {t(`whyUs.partnership.messages.1`)}
                      </span>
                    </div>
                    <div className="-mt-[1px] z-40 w-0 h-0 border-l-0 border-r-[16px] border-r-transparent border-t-[8px] border-t-white" />
                  </div>

                  {/* Sent message (right) */}
                  <div className="z-20 flex flex-col items-end self-end max-w-[180px]">
                    <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-br-none shadow-md">
                      <span className="block text-[11px]">
                        {t(`whyUs.partnership.messages.2`)}
                      </span>
                    </div>
                    <div className="-mt-[1px] z-40 w-0 h-0 border-l-[16px] border-l-transparent border-r-0 border-t-[8px] border-t-white" />
                  </div>
                </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="2xl:min-w-[380px] 2xl:max-w-[380px] xl:min-w-[350px] xl:max-w-[350px] sm:min-w-[380px] sm:max-w-[380px] min-w-[350px] max-w-[350px] h-[320px] rounded-2xl p-[5px]"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #FFFFFD 0%,
                  #FFE7B5 80%,
                  #FFD781 88%,
                  #FF9500 100%
                )
              `,
              boxShadow: `
                inset 2px 0px 3px rgba(255, 255, 255, 0.25),
                inset -2px 0px 3px rgba(0, 0, 0, 0.15),
                inset 0px -2px 3px rgba(0, 0, 0, 0.25),
                inset 0px 2px 3px rgba(255, 255, 255, 0.25)
              `
              
            }}
          >
            {/* Main container */}
            <div
              className="bg-white flex flex-col w-full h-full rounded-[12px] p-6 overflow-hidden"
              style={{
                boxShadow: `
                  inset -2px 0px 5px rgba(255, 255, 255, 0.25),
                  inset 2px 0px 5px rgba(0, 0, 0, 0.25)
                `,
                background: `
                  linear-gradient(
                    to bottom,
                    #FFFFFD 0%,
                    #FFFFFD 40%,
                    #FFE7B5 65%,
                    #FFD781 85%,
                    #FF9500 100%
                  )
                `
              }}
            >
              <span className="font-semibold text-black text-[20px]">{t('whyUs.longevity.title')}</span>
              <p
                className="text-[14px] font-medium text-dark mt-2 w-[73%]"
              >
                {t('whyUs.longevity.description')}
              </p>
              <div
                className="flex w-full h-full justify-center items-center"
              >
                {/* Animation */}
                <div
                  className="mt-8 px-2 flex flex-row w-full space-x-5 font-inter [transform:rotateX(60deg)_rotateZ(50deg)]"
                >
                  {/* First col */}
                  <div
                    className="flex flex-col space-y-3"
                  >
                    {[...Array(20)].map((_, i) => {
                      const num = i + 1;
                      return (
                        <div key={num} className="relative w-36 h-20">
                          {/* Faded copy, offset down+right */}
                          <div
                            className="bg-white w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] opacity-40 absolute top-[3px] left-[3px] pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Original box on top */}
                          <div className="bg-white flex flex-col justify-between p-3 w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] relative">
                            <span className="block text-[12px]">{t(`whyUs.longevity.messages.col1.${num}.title`)}</span>
                            <span className="block text-[10px] text-dark/80">{t(`whyUs.longevity.messages.col1.${num}.time`)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Second col */}
                  <div
                    className="flex flex-col space-y-3"
                  >
                    {[...Array(20)].map((_, i) => {
                      const num = i + 1;
                      return (
                        <div key={num} className="relative w-36 h-20">
                          {/* Faded copy, offset down+right */}
                          <div
                            className="bg-white w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] opacity-40 absolute top-[3px] left-[3px] pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Original box on top */}
                          <div className="bg-white flex flex-col justify-between p-3 w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] relative">
                            <span className="block text-[12px]">{t(`whyUs.longevity.messages.col2.${num}.title`)}</span>
                            <span className="block text-[10px] text-dark/80">{t(`whyUs.longevity.messages.col2.${num}.time`)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section 1 */}
      <section
        id="bacu-kozijnen"
        className="
          2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
          flex flex-col-reverse xl:flex-row gap-y-12 xl:gap-y-0 justify-between
          pb-[70px] pt-[200px] xl:py-[100px]
        "
      >
        {/* Left side */}
        <div className="self-center xl:self-auto flex flex-col justify-between relative space-y-3 max-w-[500px]">
          <div>
            <span className="text-black text-[20px] font-semibold">
              BaCu Kozijnen
            </span>
            <p className="text-[16px] text-dark/80 font-medium mt-3">
              {t('testimonial1.testimonial')}
            </p>
            <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
              <span className="text-black text-[16px] font-medium rotate-1">{t('testimonial1.hashtag')}</span>
            </span>
          </div>
          <a
            href="https://www.bacukozijnen.nl/"
            onClick={() => {
              trackGoal('open_bacukozijnen', 'Open BaCu Kozijnen website');
            }}
            target="_blank"
            className="mt-6 xl:mt-0 gap-x-2 w-fit flex flex-row justify-center items-center px-3 py-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
          >
            <ArrowSquareOutIcon size={18} className="text-black" />
            <span
              className="text-dark text-[13px] font-medium"
            >
              bacukozijnen.nl
            </span>
          </a>
        </div>

        {/* Right side */}
        <WebsiteSlides icon={<HouseIcon size={18} className="text-black" />} typeWebsite={t('testimonial1.typeWebsite')} imagesList={["/images/BaCu-primary.webp", "/images/BaCu-secondary.webp", "/images/BaCu-products.webp", "/images/BaCu-form.webp", "/images/BaCu-faq.webp"]} />

      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="z-40 relative
          flex flex-col xl:items-start items-center
          mt-[12vh] sm:-mt-[0vh]
          2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
          bg-[url('/backgrounds/pricing.webp')] xl:bg-no-repeat bg-top
          bg-[length:300%_auto] bg-opacity-10 sm:bg-[length:240%_auto] md:bg-[length:200%_auto] lg:bg-[length:150%_auto] xl:bg-[length:110%_auto] 2xl:bg-[length:130%_auto]
          sm:py-20 xl:py-16
        "
        >
          {/* Text */}
          <h3 className="text-[13px] md:text-[16px] text-dark/80 font-semibold">{t('pricing.title')}</h3>
          <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%] text-center xl:text-left" dangerouslySetInnerHTML={{ __html: t('pricing.subtitle') }} />
          {/* Cards */}
          <div
            className="mt-8 gap-y-8 flex w-full flex-col items-center xl:items-start xl:flex-row xl:justify-between"
          >
            {/* 1st card */}
            <div
              className="rounded-xl 2xl:min-w-[370px] max-w-[330px]"
              style={{
                background: 'linear-gradient(to bottom, #FFFFFD 33%, #F1EEF7 100%)',
                boxShadow: `
                  inset 0 3px 5.3px 0 rgba(91, 153, 255, 0.10),
                  inset 0 -10px 23.5px 0 rgba(55, 82, 218, 0.20),
                  inset 0 -20px 24px 0 rgba(41, 96, 188, 0.25),
                  inset 0 -35px 48px 0 rgba(91, 153, 255, 0.50),
                  2px 2px 47px 0 rgba(0, 0, 0, 0.10)
                `
              }}
            >
              {/* Overlay/Main */}
              <div
                className="flex flex-col rounded-xl w-full h-full bg-gradient-to-b from-[#FFFFFD] to-[#FFFFFD1A] p-6"
              >
                <span
                  className="font-bold text-[26px] text-black leading-[136.6%]"
                >
                  {t('pricing.landing.title')}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €1000
                  </span>
                  <div
                    className="text-[14px] cursor-pointer font-medium ml-2 mb-2 self-end text-dark transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:opacity-80"
                    onClick={() => navigateToRecurringPricing()}
                  >
                    <span>+</span>
                    <span
                      className="underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">{t('pricing.landing.yearlyText')}</span>
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{t('pricing.landing.description')}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                <span className="text-[15px] font-bold" >{t('pricing.landing.everythingIn')}</span>

                {/* Pros */}
                <ul className="flex flex-col mt-5 gap-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="flex flex-row gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                      </svg>
                      <span className="text-dark text-[15px] font-medium">{t(`pricing.landing.features.${num}`)}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <a
                  href={t('pricing.landing.paymentLink')}
                  onClick={() => {
                    trackGoal('order_landing', 'Order a landing page');
                  }}
                  target="_blank"
                  className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#3B9EF6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#3B9EF6] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {t('pricing.landing.button')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* 2nd card */}
            <div
              className="rounded-xl 2xl:min-w-[370px] max-w-[330px]"
              style={{
                background: 'linear-gradient(to bottom, #FFFFFD 33%, #F1EEF7 100%)',
                boxShadow: `
                  inset 0 3px 5.3px 0 rgba(168, 101, 192, 0.10),
                  inset 0 -10px 23.5px 0 rgba(126, 87, 194, 0.30),
                  inset 0 -20px 24px 0 rgba(171, 113, 207, 0.25),
                  inset 0 -35px 48px 0 rgba(243, 215, 250, 0.50),
                  3px 3px 25px 0 rgba(0, 0, 0, 0.20)
                `
              }}
            >
              {/* Overlay/Main */}
              <div
                className="relative flex flex-col rounded-xl w-full h-full bg-gradient-to-b from-[#FFFFFD] to-[#FFFFFD1A] p-6"
              >
                <span className="absolute whitespace-nowrap top-6 right-6">
                  <span className="absolute bg-[#C36CFF]/20 left-[2px] top-[6px] bottom-[2px] right-[2px] -rotate-1"></span>
                  <span className="relative text-dark px-2 text-sm font-medium">{t('pricing.standard.badge')}</span>
                </span>

                <span
                  className="font-bold text-[26px] text-black leading-[136.6%]"
                >
                  {t('pricing.standard.title')}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €1500
                  </span>

                  <div
                    className="text-[14px] cursor-pointer font-medium ml-2 mb-2 self-end text-dark transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:opacity-80"
                    onClick={() => navigateToRecurringPricing()}
                  >
                    <span>+</span>
                    <span
                      className="underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">{t('pricing.standard.yearlyText')}</span>
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{t('pricing.standard.description')}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                <span className="text-[15px] font-bold" >{t('pricing.standard.everythingIn')}</span>

                {/* Pros */}
                <ul className="flex flex-col mt-5 gap-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="flex flex-row gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                      </svg>
                      <span className="text-dark text-[15px] font-medium">{t(`pricing.standard.features.${num}`)}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <a
                  href={t('pricing.standard.paymentLink')}
                  onClick={() => {
                    trackGoal('order_standard', 'Order a standard website');
                  }}
                  target="_blank"
                  className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#7652B3] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#7652B3] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {t('pricing.standard.button')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* 3rd card */}
            <div
              className="mb-16 sm:mb-0 rounded-xl 2xl:min-w-[370px] max-w-[330px]"
              style={{
                background: 'linear-gradient(to bottom, #FFFFFD 33%, #F7F5EE 100%)',
                boxShadow: `
                  inset 0 3px 5.3px 0 rgba(239, 224, 184, 0.10),
                  inset 0 -10px 23.5px 0 rgba(200, 77, 0, 0.20),
                  inset 0 -20px 24px 0 rgba(223, 178, 122, 0.25),
                  inset 0 -35px 48px 0 rgba(239, 224, 184, 0.50),
                  2px 2px 47px 0 rgba(0, 0, 0, 0.10)
                `
              }}
            >
              {/* Overlay/Main */}
              <div
                className="flex flex-col rounded-xl w-full h-full bg-gradient-to-b from-[#FFFFFD] to-[#FFFFFD1A] p-6"
              >
                <span
                  className="font-bold text-[26px] text-black leading-[136.6%]"
                >
                  {t('pricing.premium.title')}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €2000+
                  </span>

                  <div
                    className="text-[14px] cursor-pointer font-medium ml-2 mb-2 self-end text-dark transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:opacity-80"
                    onClick={() => navigateToRecurringPricing()}
                  >
                    <span>+</span>
                    <span
                      className="underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">{t('pricing.premium.yearlyText')}</span>
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{t('pricing.premium.description')}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                <span className="text-[15px] font-bold" >{t('pricing.premium.everythingIn')}</span>

                {/* Pros */}
                <ul className="flex flex-col mt-5 gap-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="flex flex-row gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <rect width="25" height="25" rx="12.5" fill="#FFE9CB"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#FF9500"/>
                      </svg>
                      <span className="text-dark text-[15px] font-medium">{t(`pricing.premium.features.${num}`)}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <a
                  href="https://calendly.com/nazar_yakov/yakoweb"
                  onClick={() => {
                    trackGoal('book_an_intro_call_premium_website', 'Book an intro call on Premium plan');
                  }}
                  target="_blank"
                  className="w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#FA8700] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="bg-SecondaryBackground/50 select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#FA8700] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {t('pricing.premium.button')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* CTA */}
      <section
        className="px-12 flex flex-col gap-y-5 items-center justify-center text-center my-[120px]"
      >
        <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%]">{t('cta.title')}</h2>
        <a
            href="https://calendly.com/nazar_yakov/yakoweb"
            onClick={() => {
              trackGoal('book_an_intro_call_cta', 'Book an intro call on CTA section');
            }}
            target="_blank"
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
            >
              <span
                className="text-white text-[15px] font-semibold"
              >
                {t('cta.button')}
              </span>
              <span
                className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                aria-hidden="true"
              >
                {t('cta.button')}
              </span>

            </div>
          </a>
      </section>
      
      {/* Testamonial section 2 */}
      <section
        id="ek-autotechniek"
        className="
          2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
          flex flex-col xl:flex-row justify-center gap-y-12 xl:gap-y-0 gap-x-12
          py-[100px]
        "
      >
        {/* Left side */}
        <WebsiteSlides icon={<CarProfileIcon size={18} className="text-black" />} typeWebsite={t('testimonial2.typeWebsite')} imagesList={["/images/EK-primary.webp", "/images/EK-secondary.webp", "/images/EK-text.webp", "/images/EK-question.webp", "/images/EK-form.webp"]} />
        {/* Right side */}
        <div className="self-center xl:self-auto flex flex-col justify-between relative space-y-3 max-w-[450px]">
          <div
            className=""
          >
            <span className="text-black text-[20px] font-semibold">
              EK Autotechniek
            </span>
            <p className="text-[16px] text-dark/80 font-medium mt-3">
              {t('testimonial2.testimonial')}
            </p>
            <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
              <span className="text-black text-[16px] font-medium rotate-1">{t('testimonial2.hashtag')}</span>
            </span>
          </div>
          <a
            href="https://www.ekautotechniek.nl/"
            onClick={() => {
              trackGoal('open_ekautotechniek', 'Open EK Autotechniek website');
            }}
            target="_blank"
            className="mt-6 xl:mt-0 gap-x-2 w-fit flex flex-row justify-center items-center px-3 py-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
          >
            <ArrowSquareOutIcon size={18} className="text-black" />
            <span
              className="text-dark text-[13px] font-medium"
            >
              ekautotechniek.nl
            </span>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        className="flex flex-col items-center px-6 sm:py-20 xl:py-16"
      >
        {/* Text */}
        <h3 className="text-center text-[13px] md:text-[16px] text-dark/80 font-semibold">{t('faq.title')}</h3>
        <h2
          className="text-center text-[28px] md:text-[32px] text-black font-bold leading-[114%] mb-14"
          dangerouslySetInnerHTML={{ __html: t('faq.subtitle') }}
        />
        {/* FAQ part */}
        <ul>
          {t.raw('faq.items').map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={index}
                className={`cursor-pointer flex flex-col bg-SecondaryBackground ${isOpen ? '' : 'hover:shadow-[0_0_10px_rgba(0,0,0,0.10)]'} transition-all duration-300 w-full sm:w-[600px] py-3 px-5 mb-4 rounded-xl border border-dark/20`}
                onClick={() => toggle(index)}
              >
                <div
                  className="flex flex-row justify-between cursor-pointer"
                >
                  <span className="text-black font-semibold text-[16px]">{item.question}</span>
                  <CaretRightIcon
                    size={24}
                    className={`text-black transform transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                <div
                  style={{
                    transitionDuration: '400ms'
                  }}
                  className={`overflow-hidden transition-all ${
                    isOpen ? 'max-h-[500px] mt-3' : 'max-h-0'
                  }`}
                >
                  <div
                    className="text-dark text-[14px] font-medium leading-[140%]"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </li>
            );
          })}
        </ul>

      </section>

      {/* Footer */}
      <footer
        className="border-t-[2px] border-dark/10 mt-16 pt-16 relative z-0 flex flex-col-reverse bg-[url('/backgrounds/footer.webp')] bg-[length:100%_auto] bg-no-repeat bg-bottom px-6 sm:px-12 xl:px-44"
      >
        {/* Below */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 font-medium text-dark text-[14px]">
          <div className="flex flex-row gap-x-4">
            <span>{t('footer.copyright')}</span>
            <Link
              href={t('footer.termsPage')}
              className="underline"
            >
              {t('footer.terms')}
            </Link>
            <Link
              href={t('footer.privacyPage')}
              className="underline"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              href={t('footer.cookiesPage')}
              className="underline"
            >
              Cookies
            </Link>
          </div>
          <div className="flex flex-row items-center gap-3">
            <a 
              href="/" 
              onClick={() => changeLanguage('NL')}
              className={`transition-colors ${pathname === '/' ? 'font-semibold text-black' : 'text-dark/80 hover:text-black'}`}
            >
              NL
            </a>
            <div className="w-[1px] h-[28px] bg-dark" />
            <a 
              href="/en" 
              onClick={() => changeLanguage('EN')}
              className={`transition-colors ${pathname === '/en' ? 'font-semibold text-black' : 'text-dark/80 hover:text-black'}`}
            >
              EN
            </a>
          </div>
        </div>

        {/* Line */}
        <div className="w-full h-[1px] bg-dark" />

        {/* Above */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-medium text-dark text-[14px]">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 max-w-full">
            <img src="/logos/YakoWeb.svg" alt="Logo" className="w-[130px] h-auto select-none" draggable="false" />
            <span className="max-w-[300px]">{t('footer.description')}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
            <a onClick={() => {trackGoal('email_us', 'Email us')}}href="mailto:hello@yakoweb.com" className="max-w-[300px] hover:text-black transition-all duration-200 break-words">{t('footer.email')}</a>
            <div className="flex flex-row gap-3">
              <a target="_blank" href="https://x.com/nazar_yakov" className="group">
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
  );
}
