"use client";
import { ArrowSquareOutIcon, HouseIcon, CarProfileIcon, CaretRightIcon, XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon, CalendarIcon } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import Navbar from "./components/Navbar";
import WebsiteSlides from "./components/WebsiteSlides";
import ContactCard from "./components/ContactCard";
import { trackGoal } from './utils/datafast';

// Import Dutch translations directly
import nlTranslations from '../messages/nl.json';
import EKAutotechniekCasePreview from "./components/EKAutotechniekCasePreview";
import BaCuKozijnenCasePreview from "./components/BaCuKozijnenCasePreview";
import Footer from "./components/Footer";
import SAMeubelsCasePreview from "./components/SAMeubelsCasePreview";


export default function Home() {
  const pathname = usePathname();

  // Helper function to access Dutch translations
  const nl = nlTranslations.HomePage;

  // Get current month in Dutch
  const getCurrentMonthInDutch = () => {
    const months = [
      'januari', 'februari', 'maart', 'april', 'mei', 'juni',
      'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ];
    return months[new Date().getMonth()];
  };

  // Dynamic badge text with current month
  const badgeText = `Nog 1 plek beschikbaar voor ${getCurrentMonthInDutch()}`;

  // Contact cards data
  const contactCards = [
    {
      href: "https://wa.me/+31631194410",
      title: "WhatsApp",
      description: "Direct bericht sturen",
      ctaText: "+31 6 311 944 10",
      icon: WhatsappLogoIcon,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      hoverBgColor: "bg-green-200",
      textColor: "text-green-600",
      hoverTextColor: "text-green-700"
    },
    {
      href: "mailto:hello@yakoweb.com",
      title: "E-mail",
      description: "Stuur ons een bericht",
      ctaText: "hello@yakoweb.com",
      icon: () => (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      hoverBgColor: "bg-blue-200",
      textColor: "text-blue-600",
      hoverTextColor: "text-blue-700",
      isEmail: true
    },
    {
      href: "https://calendly.com/nazar_yakov/yakoweb",
      title: "Plan gesprek",
      description: "Boek een gratis introgesprek",
      ctaText: "Bekijk beschikbaarheid",
      icon: CalendarIcon,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      hoverBgColor: "bg-purple-200",
      textColor: "text-purple-600",
      hoverTextColor: "text-purple-700"
    },
    {
      href: "https://www.facebook.com/nazar.yak",
      title: "Facebook",
      description: "Stuur ons een bericht op Facebook",
      ctaText: "nazar.yak",
      icon: FacebookLogoIcon,
      iconColor: "text-blue-700",
      bgColor: "bg-blue-100",
      hoverBgColor: "bg-blue-200",
      textColor: "text-blue-700",
      hoverTextColor: "text-blue-800"
    },
    {
      href: "https://www.linkedin.com/in/nazar-yakov/",
      title: "LinkedIn",
      description: "Stuur ons een bericht op LinkedIn",
      ctaText: "Nazar Yakov",
      icon: LinkedinLogoIcon,
      iconColor: "text-blue-700",
      bgColor: "bg-blue-100",
      hoverBgColor: "bg-blue-200",
      textColor: "text-blue-700",
      hoverTextColor: "text-blue-800"
    },
    {
      href: "https://www.instagram.com/yako.web/",
      title: "Instagram",
      description: "Stuur ons een bericht op Instagram",
      ctaText: "@yako.web",
      icon: InstagramLogoIcon,
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
      hoverBgColor: "bg-pink-200",
      textColor: "text-pink-600",
      hoverTextColor: "text-pink-700"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    // If we're opening a question (not closing), track it
    if (openIndex !== index) {
      const faqItem = nl.faq.items[index];
      const questionText = faqItem.question;
      const trackingName = questionText.toLowerCase().replace(/\?/g, '').trim().replace(/\s+/g, '_');
      trackGoal(`faq_${trackingName}`, `Open FAQ: ${questionText}`);
    }
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Infinite auto-scrolling grid
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoScrollIntervalRef = useRef(null);

  // Create infinite images with all primary and secondary images
  const createInfiniteImages = () => {
    const images = [
      "/images/EK-primary.webp",
      "/images/sameubels-primary.webp",
      "/images/BaCu-primary.webp",
      "/images/het-primary.webp",
      "/images/CarMaat-primary.webp",
      "/images/EK-secondary.webp",
      "/images/CarMaat-secondary.webp",
      "/images/sameubels-secondary.webp",
      "/images/het-secondary.webp",
      "/images/BaCu-secondary.webp",
      "/images/het-booking.webp",
      "/images/PickFast-primary.webp",
    ];
    
    // Create 30 images by cycling through the available images
    return Array.from({ length: 30 }, (_, i) => {
      const imageSrc = images[i % images.length];
      const imageName = imageSrc.split('/').pop().split('.')[0];
      
      return (
        <div key={i} className="flex-shrink-0">
          <img 
            src={imageSrc}
            alt={`${imageName} ${Math.floor(i / images.length) + 1}`}
            className="select-none w-auto xl:h-[400px] md:h-[350px] h-[200px] object-cover rounded-lg shadow-lg"
            draggable="false"
          />
        </div>
      );
    });
  };

  const startAutoScroll = () => {
    // Always clear existing interval first
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    
    autoScrollIntervalRef.current = setInterval(() => {
      if (!scrollContainerRef.current || isDragging) return;
      
      const container = scrollContainerRef.current;
      const scrollSpeed = 1; // pixels per frame
      
      container.scrollLeft += scrollSpeed;
      
      // Reset scroll position when we've scrolled through all images
      // This creates the infinite effect
      const imageWidth = 416; // Approximate width of image + gap
      const totalWidth = imageWidth * 30;
      
      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = 0;
      }
    }, 16); // ~60fps
  };


  // Start auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();
  }, []);

  return (
    <div
      className="font-manrope bg-background"
    >
      <Navbar currentPage={pathname}/>
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
          <span className="text-[12px] font-semibold">{badgeText}</span>
        </div>
        {/* Title */}
        <h1
          className="text-3xl pb-1 sm:text-5xl xl:text-[52px] font-bold text-center leading-[110%] bg-gradient-to-r from-[#523C79] via-black to-[#523C79] bg-clip-text text-transparent mt-3"
          dangerouslySetInnerHTML={{ __html: nl.title }}
        />
        {/* Subtitle */}
        <h2
          className="text-center text-[14px] md:text-[16px] font-semibold text-dark/80 max-w-[530px] mt-2 lg:mt-4"
        >
          {nl.subtitle}
        </h2>
        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8"
        >
          {/* Button 1 */}
          <a
            href="#contact"
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
            >
              {/* Sharp front text */}
              <span
                className="text-white text-[15px] font-semibold"
              >
                {nl.button1}
              </span>
              <span
                className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                aria-hidden="true"
              >
                {nl.button1}
              </span>

            </div>
          </a>
          {/* Button 2 */}
          <a
            href="#prijzen"
            rel="noopener noreferrer"
            className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] border-[6px] border-[#7853B6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
          >
            <div
              className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
            >
              <span
                className="text-[#7853B6] transition-colors duration-300 ease-in-out text-[15px] font-semibold"
              >
                {nl.button2}
              </span>
            </div>
          </a>
        </div>
          {/* Horizontal Image Grid */}
         <div className="w-full overflow-x-hidden flex justify-center mt-16">
           <div 
             ref={scrollContainerRef}
             className="flex overflow-x-hidden scrollbar-hide gap-2 py-16 sm:gap-4 max-w-full w-full select-none box-border p-0"
           >
            {createInfiniteImages()}
          </div>
        </div>
      </section>
      
      {/* Why choose us */}
      <section
        className="z-30 relative
          flex flex-col justify-center xl:items-start items-center
          2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
          bg-[url('/backgrounds/whyus.webp')] sm:bg-no-repeat bg-top
          bg-[length:140%_auto] sm:bg-[length:300%_auto] md:bg-[length:200%_auto] lg:bg-[length:170%_auto] xl:bg-[length:110%_auto] 2xl:bg-[length:100%_auto]
          py-20 xl:py-24
        
        "
      >
        <h3 className="text-center text-[13px] md:text-[16px] text-dark/80 font-semibold">{nl.whyUs.title}</h3>
        <h2 className="text-center text-[28px] md:text-[32px] text-black font-bold">{nl.whyUs.subtitle}</h2>
        {/* Cards div */}
        <div
          className="w-full grid grid-cols-1 xl:grid-cols-3 mt-10"
          style={{ gap: '40px' }}
        >
          {/* Card 1 */}
          <div
            className="w-full h-[320px] rounded-2xl p-[5px]"
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
              <span className="font-semibold text-black text-[20px]">{nl.whyUs.performance.title}</span>
              <p
                className="text-[14px] font-medium text-dark mt-2"
              >
                {nl.whyUs.performance.description}
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
                      <span className="text-black text-[13px]">{nl.whyUs.performance.messages[1].text}</span>
                      <span className="text-dark/80 text-[10px]">{nl.whyUs.performance.messages[1].time}</span>
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
                      <span className="text-black text-[12px]">{nl.whyUs.performance.messages[2].text}</span>
                      <span className="text-dark/80 text-[9px]">{nl.whyUs.performance.messages[2].time}</span>
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
                      <span className="text-black text-[11px]">{nl.whyUs.performance.messages[3].text}</span>
                      <span className="text-dark/80 text-[8px]">{nl.whyUs.performance.messages[3].time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="w-full h-[320px] rounded-2xl p-[5px]"
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
              <span className="font-semibold text-black text-[20px]">{nl.whyUs.partnership.title}</span>
              <p
                className="text-[14px] font-medium text-dark mt-2"
              >
                {nl.whyUs.partnership.description}
              </p>
                {/* Animation */}
                <div className="mt-8 px-2 flex flex-col w-full font-inter space-y-2">
                  {/* Sent message (right) */}
                  <div className="z-20 flex flex-col items-end self-end max-w-[180px]">
                    <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-br-none shadow-md">
                      <span className="block text-[11px]">
                        {nl.whyUs.partnership.messages[1]}
                      </span>
                    </div>
                    <div className="-mt-[1px] z-40 w-0 h-0 border-l-[16px] border-l-transparent border-r-0 border-t-[8px] border-t-white" />
                  </div>
                  {/* Received message (left) */}
                  <div className="z-20 flex flex-col items-start max-w-[180px]">
                    <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-bl-none shadow-md">
                      <span className="block text-[11px] text-dark">
                        {nl.whyUs.partnership.messages[2]}
                      </span>
                    </div>
                    <div className="-mt-[1px] z-40 w-0 h-0 border-l-0 border-r-[16px] border-r-transparent border-t-[8px] border-t-white" />
                  </div>
                </div>
            </div>
          </div>
          {/* Card 3 */}
          <div
            className="w-full h-[320px] rounded-2xl p-[5px]"
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
              <span className="font-semibold text-black text-[20px]">{nl.whyUs.longevity.title}</span>
              <p
                className="z-20 text-[14px] font-medium text-dark mt-2 w-[73%]"
              >
                {nl.whyUs.longevity.description}
              </p>
              <div
                className="flex w-full h-full justify-center items-center"
              >
                {/* Animation */}
                <div
                  className="z-10 mt-20 px-2 flex flex-row w-full space-x-5 font-inter [transform:rotateX(60deg)_rotateZ(50deg)]"
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
                             <span className="block text-[12px]">{nl.whyUs.longevity.messages.col1[num].title}</span>
                             <span className="block text-[10px] text-dark/80">{nl.whyUs.longevity.messages.col1[num].time}</span>
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
                             <span className="block text-[12px]">{nl.whyUs.longevity.messages.col2[num].title}</span>
                             <span className="block text-[10px] text-dark/80">{nl.whyUs.longevity.messages.col2[num].time}</span>
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
    
      {/* Wat krijg je? */}
      <section
				className="2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-8
				  flex flex-col xl:flex-row items-center xl:items-center justify-between gap-y-12 xl:gap-x-32
					pt-[60px] sm:py-[80px] xl:py-[100px]
				"
			>
				{/* Left */}
				<div
					className="flex flex-col items-center xl:items-start max-w-full xl:max-w-[50%]"
				>
					<h3 className="text-center xl:text-left text-[13px] md:text-[16px] text-dark/80 font-semibold">WAT KRIJG JE?</h3>
					<h2 className="text-center xl:text-left text-[24px] sm:text-[28px] md:text-[32px] text-black font-bold leading-[120%]">Meer waarde dan waar je voor betaalt</h2>
					<p className="flex flex-col text-left text-[14px] sm:text-[16px] text-dark/80 font-medium mt-5 gap-3">
						<span>Je bestelt niet zomaar een website die niets doet omdat "iedereen een website heeft".</span>
						<span>Het doel is meer afspraken, verkopen en winst. Wij doen alles om je hiermee te helpen. Voor dit doel is goede webdesign niet genoeg, daarom krijg je ook SEO-optimalisatie zodat je website beter vindbaar is, Google Analytics-instelling zodat wij precies weten wat het beste voor jou werkt. Het eerste jaar blijft je website foutloos en steeds geoptimaliseerd - gratis, voor een makkelijkere start. Je leert ook hoe je teksten en foto's zelf, snel en gemakkelijk kunt bewerken en de website kunt beheren. Heb je nog geen domein of zakelijke e-mail? Wij regelen dat snel samen. Je krijgt onbeperkte revisies en verbeteringen totdat je tevreden bent.</span>
						{/* <span>Wij willen dat je je doel bereikt, daarom stellen wij dit: Indien je website in de eerste 100 dagen zich niet terugbetaalt, werken wij gratis om dat te veranderen.</span> */}
					</p>
				</div>
				{/* Right */}
				<div
					className="flex flex-col justify-center items-center bg-SecondaryBackground p-6 sm:p-8 lg:p-12 xl:p-16 shadow-xl text-center gap-3 sm:gap-4 w-full max-w-[500px] xl:max-w-none xl:min-w-[400px] 2xl:min-w-[500px]"
				>
					<span className="text-[14px] sm:text-[16px] font-medium">Website</span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ SEO-optimalisatie – <strong><s>€300</s></strong> <strong className="text-green-600">Gratis</strong></span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ Analytics instellen – <strong><s>€200</s></strong> <strong className="text-green-600 shadow-4xl">Gratis</strong></span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ 1 jaar gratis ondersteuning – <strong><s>€108</s></strong> <strong className="text-green-600">Gratis</strong></span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ Webflow handleiding over website beheren – <strong><s>€50</s></strong> <strong className="text-green-600">Gratis</strong></span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ Hulp met domein en e-mail – <strong><s>€100</s></strong> <strong className="text-green-600">Gratis</strong></span>
					<span className="text-[13px] sm:text-[14px] lg:text-[16px]">+ Onbeperkte revisies – <strong><s>€?</s></strong> <strong className="text-green-600">Gratis</strong></span>
					<span className="text-base sm:text-lg mt-2 sm:mt-4 font-medium">= Website + <strong><s>€758+</s></strong> <strong className="text-green-600">gratis</strong> extra's</span>
				</div>
      </section>
      {/* Case Preview EK Autotechniek */}
      <EKAutotechniekCasePreview className={"pb-[70px] pt-[200px] xl:py-[150px]"}/>
      {/* Case Preview SA Meubels */}
      <SAMeubelsCasePreview className="pb-[100px] pt-[80px]"/>
      
      {/* Pricing */}
      <section
        id="prijzen"
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
          <h3 className="text-[13px] md:text-[16px] text-dark/80 font-semibold">{nl.pricing.title}</h3>
          <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%] text-center xl:text-left" dangerouslySetInnerHTML={{ __html: nl.pricing.subtitle }} />
          {/* Cards */}
          <div
            className="mt-8 w-full grid grid-cols-1 xl:grid-cols-3 gap-10"
            style={{ gap: '40px' }}
          >
            {/* 1st card */}
            <div
              className="rounded-xl w-full"
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
                  {nl.pricing.landing.title}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €500
                  </span>
                  <div
                    className="hidden text-[14px] font-medium ml-2 mb-2 self-end text-dark"
                  >
                    <span>+</span>
                    <span>
                      €<span className="font-semibold text-[16px]">0</span><span className="">/jaar</span>
                    </span>
                    <span> daarna </span>
                    <span>
                      €<span className="font-semibold text-[16px]">9</span><span className="">{nl.pricing.landing.yearlyText}</span>
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{nl.pricing.landing.description}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                {/* <span className="text-[15px] font-bold" >{t('pricing.landing.everythingIn')}</span> */}

                {/* Pros */}
                <ul className="flex flex-col gap-y-4">
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-semibold">4 basic-pagina's</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-semibold">Alles geleverd binnen 10 dagen</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Mobiel-vriendelijk ontwerp</span>
                  </li>
                  <li className="flex flex-row gap-3 cursor-pointer relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-6 flex bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 max-w-[250px] text-center">
                      Zodat je website beter te vinden is op Google.
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium underline">SEO-optimalisatie</span>
                  </li>
                  <li className="flex flex-row gap-3 cursor-pointer relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-6 flex bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 min-w-[300px] text-center">
                      Instelling, zodat wij precies kunnen zien hoeveel bezoekers je website krijgt en welke acties ze ondernemen. Zo kunnen wij begrijpen wat best voor jouw werkt.
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium underline">Google Analytics</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Hulp met domein en e-mail</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">1 jaar gratis ondersteuning</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Maandelijkse prestatie-checks</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Zelf bewerken</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Onbeperkte revisies</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#3B82F6"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Terugbetaling op basis van de projectfase</span>
                  </li>
                </ul>
                {/* Button */}
                <a
                  href="#contact"
                  onClick={() => {
                    trackGoal('order_landing', 'Order a landing page');
                  }}
                  className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#3B9EF6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#3B9EF6] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {nl.pricing.landing.button}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* 2nd card */}
            <div
              className="rounded-xl w-full"
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
                  <span className="relative text-dark px-2 text-sm font-medium">{nl.pricing.standard.badge}</span>
                </span>

                <span
                  className="font-bold text-[26px] text-black leading-[136.6%]"
                >
                  {nl.pricing.standard.title}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €750
                  </span>

                  <div
                    className="hidden text-[14px] font-medium ml-2 mb-2 self-end text-dark"
                  >
                    <span>+</span>
                    <span>
                      €<span className="font-semibold text-[16px]">0</span><span className="">/jaar</span>
                    </span>
                    <span> daarna </span>
                    <span>
                      €<span className="font-semibold text-[16px]">9</span><span className="">{nl.pricing.standard.yearlyText}</span>
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{nl.pricing.standard.description}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                {/* <span className="text-[15px] font-bold" >{t('pricing.standard.everythingIn')}</span> */}

                {/* Pros */}
                <ul className="flex flex-col gap-y-4">
                  <li className="flex flex-row gap-3 cursor-pointer relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-6 flex bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 max-w-[250px] text-center">
                      Als je extra pagina nodig hebt, bijvoorbeeld voor een extra dienst, is dit in principe geen probleem 😉
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-semibold underline">Tot 10 pagina's</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-semibold">Alles geleverd binnen 3 weken</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Mobiel-vriendelijk ontwerp</span>
                  </li>
                  <li className="flex flex-row gap-3 cursor-pointer relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-6 flex bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 max-w-[250px] text-center">
                      Zodat je website beter te vinden is op Google.
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium underline">SEO-optimalisatie</span>
                  </li>
                  <li className="flex flex-row gap-3 cursor-pointer relative group">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mt-6 flex bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-10 min-w-[300px] text-center">
                      Instelling, zodat wij precies kunnen zien hoeveel bezoekers je website krijgt en welke acties ze ondernemen. Zo kunnen wij begrijpen wat best voor jouw werkt.
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium underline">Google Analytics</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Hulp met domein en e-mail</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">1 jaar gratis ondersteuning</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Maandelijkse prestatie-checks</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Zelf bewerken</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Onbeperkte revisies</span>
                  </li>
                  <li className="flex flex-row gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                    </svg>
                    <span className="text-dark text-[15px] font-medium">Terugbetaling op basis van de projectfase</span>
                  </li>
                </ul>
                {/* Button */}
                <a
                  href="#contact"
                  onClick={() => {
                    trackGoal('order_standard', 'Order a standard website');
                  }}
                  className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#7652B3] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#7652B3] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {nl.pricing.standard.button}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {/* 3rd card */}
            <div
              className="mb-16 sm:mb-0 rounded-xl w-full self-start"
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
                className="flex flex-col rounded-xl w-full bg-gradient-to-b from-[#FFFFFD] to-[#FFFFFD1A] p-6"
              >
                <span
                  className="font-bold text-[26px] text-black leading-[136.6%]"
                >
                  {nl.pricing.premium.title}
                </span>
                {/* Price */}
                <div
                  className="flex flex-row"
                >
                  <span
                    className="font-bold text-[34px] text-black"
                  >
                    €1000+
                  </span>
                </div>
                <p className="mt-1 text-dark text-[15px] font-medium">{nl.pricing.premium.description}</p>
                {/* Stroke */}
                <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                <span className="text-[15px] font-bold" >{nl.pricing.premium.everythingIn}</span>

                {/* Pros */}
                <ul className="flex flex-col mt-5 gap-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} className="flex flex-row gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <rect width="25" height="25" rx="12.5" fill="#FFE9CB"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#FF9500"/>
                      </svg>
                      <span className="text-dark text-[15px] font-medium">{nl.pricing.premium.features[num]}</span>
                    </li>
                  ))}
                </ul>
                {/* Button */}
                <a
                  href="#contact"
                  onClick={() => {
                    trackGoal('book_an_intro_call_premium_website', 'Book an intro call on Premium plan');
                  }}
                  className="w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#FA8700] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                >
                  <div
                    className="bg-SecondaryBackground/50 select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                  >
                    <span
                      className="text-[#FA8700] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                    >
                      {nl.pricing.premium.button}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </section>
      
      {/* Neem contact op */}
      <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Neem contact op</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Kies de manier die het beste bij jou past om met ons in contact te komen</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactCards.map((card, index) => (
            <ContactCard
              key={index}
              href={card.href}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              icon={card.icon}
              iconColor={card.iconColor}
              bgColor={card.bgColor}
              hoverBgColor={card.hoverBgColor}
              textColor={card.textColor}
              hoverTextColor={card.hoverTextColor}
              isEmail={card.isEmail}
            />
          ))}
        </div>
      </section>

      {/* Cta HIDDEN*/}
      <section
        className="hidden px-12 flex-col gap-y-5 items-center justify-center text-center my-[120px]"
      >
        <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%]">{nl.cta.title}</h2>
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
                {nl.cta.button}
              </span>
              <span
                className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                aria-hidden="true"
              >
                {nl.cta.button}
              </span>

            </div>
          </a>
      </section>
      
      {/* Case Preview BaCu Kozijnen*/}
      <BaCuKozijnenCasePreview className={"py-[100px]"}/>

      {/* FAQs */}
      <section
        id="faqs"
        className="flex flex-col items-center px-6 sm:py-20 xl:py-16"
      >
        {/* Text */}
        <h3 className="text-center text-[13px] md:text-[16px] text-dark/80 font-semibold">{nl.faq.title}</h3>
        <h2
          className="text-center text-[28px] md:text-[32px] text-black font-bold leading-[114%] mb-14"
          dangerouslySetInnerHTML={{ __html: nl.faq.subtitle }}
        />
        {/* FAQ part */}
        <ul>
          {nl.faq.items.map((item, index) => {
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
      <Footer />

    </div>
  );
}
