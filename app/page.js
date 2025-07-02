"use client";
import Navbar from "./components/Navbar";
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon, LinkedinLogoIcon, ArrowSquareOutIcon, HouseIcon, CarProfileIcon } from "@phosphor-icons/react";
import WebsiteSlides from "./components/WebsiteSlides";

export default function Home() {
  const updatesCol1 = [
    { title: "Improved how pages load on phones", time: "3 days ago" },
    { title: "Fixed an issue with the payment screen", time: "1 week ago" },
    { title: "Updated the legal page to match latest rules", time: "2 weeks ago" },
    { title: "Better wording for search engines", time: "5 days ago" },
    { title: "Navigation buttons work more smoothly", time: "4 hours ago" },
    { title: "Added dark theme for easier viewing", time: "6 days ago" },
    { title: "Refreshed the FAQ layout", time: "12 hours ago" },
    { title: "Enabled multilingual display", time: "2 days ago" },
    { title: "Cleaned up text spacing", time: "1 hour ago" },
    { title: "Improved how visitors sign up", time: "3 weeks ago" },
    { title: "Updated alerts to be more visible", time: "2 days ago" },
    { title: "Polished mobile menu animations", time: "3 hours ago" },
    { title: "Improved visual contrast for readability", time: "4 days ago" },
    { title: "Bug fix for images not loading properly", time: "5 hours ago" },
    { title: "Added visitor tracking tools", time: "1 day ago" },
    { title: "Better layout on smaller screens", time: "1 week ago" },
    { title: "Minor design cleanup", time: "30 minutes ago" },
    { title: "Faster load times for galleries", time: "6 hours ago" },
    { title: "SEO settings improved", time: "10 days ago" },
    { title: "Resolved layout shift on homepage", time: "2 hours ago" },
  ];
  const updatesCol2 = [
    { title: "Fixed login display on older browsers", time: "4 days ago" },
    { title: "Improved header visibility", time: "2 weeks ago" },
    { title: "Adjusted fonts for better clarity", time: "6 hours ago" },
    { title: "Added page About us", time: "5 days ago" },
    { title: "Better spacing in contact forms", time: "2 hours ago" },
    { title: "Security updates applied", time: "1 week ago" },
    { title: "Contact form error now resolved", time: "1 day ago" },
    { title: "Search keywords optimized", time: "3 days ago" },
    { title: "Text scaling issue fixed", time: "30 minutes ago" },
    { title: "Updated translation for buttons", time: "12 hours ago" },
    { title: "Added visual effects on hover", time: "3 hours ago" },
    { title: "Improved experience for screen readers", time: "2 days ago" },
    { title: "Fixed email signup bug", time: "5 hours ago" },
    { title: "Footer links better organized", time: "2 weeks ago" },
    { title: "Better layout for announcements", time: "10 days ago" },
    { title: "Adjusted mobile margins", time: "20 hours ago" },
    { title: "Animations load more smoothly", time: "3 hours ago" },
    { title: "Improved color accessibility", time: "8 hours ago" },
    { title: "Reduced unused code", time: "1 week ago" },
    { title: "Minor fixes across all pages", time: "1 hour ago" },
  ];

  const pricingFeatures = [
    [
      "1 landing page",
      "Mobile-friendly design",
      "Full copywriting",
      "Basic contact forms",
      "Delivered in 10 days"
    ],
    [
      "Up to 6 pages",
      "Professional design",
      "Advanced contact forms",
      "Up to 2 languages",
      "Delivered in 3 weeks"
    ],
    [
      "Premium UI/UX design",
      "Database management",
      "Payment processing",
      "API integrations",
      "Everything delivered in 6 weeks"
    ],
  ];

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
            <span className="text-[12px] font-semibold">1 spot left for July</span>
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
                src="/images/EK-secondary.webp"
                alt="EK Logo Secondary"
                className="absolute bottom-5 hover:scale-105 hover:-translate-y-3 left-10 lg:left-20 rotate-[8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-300 z-0 hover:z-20"
              />
              <img
                src="/images/EK-primary.webp"
                alt="EK Logo Primary"
                className="relative hover:scale-105 hover:-translate-y-3 right-10 lg:right-0 rotate-[-8deg] h-[80px] sm:h-[100px] w-auto rounded-lg shadow-[0_0_30px_1px_#1A063D59] transition-all duration-500 z-10"
              />
            </div>

            {/* Second */}
            <div className="relative w-fit">
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
            </div>
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
          <h3 className="text-center text-[13px] md:text-[16px] text-dark/80 font-semibold">WHY BUSINESSES CHOOSE YAKOWEB?</h3>
          <h2 className="text-center text-[28px] md:text-[32px] text-black font-bold">The partner that helps you grow</h2>
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
                <span className="font-semibold text-black text-[20px]">Performance</span>
                <p
                  className="text-[14px] font-medium text-dark mt-2"
                >
                  Our mission is to help businesses get more sales. We carry out an in-depth analysis of your niche and create sites that generate profit.
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
                        <span className="text-black text-[13px]">Ben wants to jump on the call.</span>
                        <span className="text-dark/80 text-[10px]">Just now</span>
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
                        <span className="text-black text-[12px]">Mike just made an order for $499.00.</span>
                        <span className="text-dark/80 text-[9px]">3 minutes ago</span>
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
                        <span className="text-black text-[11px]">Emma just made a new appointment.</span>
                        <span className="text-dark/80 text-[8px]">1 hour ago</span>
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
                <span className="font-semibold text-black text-[20px]">Partnership</span>
                <p
                  className="text-[14px] font-medium text-dark mt-2"
                >
                  From first idea to final delivery, we keep you informed and confident at every stage. This way, the final result matches your goals, not just our plan.
                </p>
                  {/* Animation */}
                  <div className="mt-8 px-2 flex flex-col w-full font-inter space-y-2">
                    {/* Received message (left) */}
                    <div className="z-20 flex flex-col items-start max-w-[180px]">
                      <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-bl-none shadow-md">
                        <span className="block text-[11px] text-dark">
                          We improved SEO by adding more keywords.
                        </span>
                      </div>
                      <div className="-mt-[1px] z-40 w-0 h-0 border-l-0 border-r-[16px] border-r-transparent border-t-[8px] border-t-white" />
                    </div>

                    {/* Sent message (right) */}
                    <div className="z-20 flex flex-col items-end self-end max-w-[180px]">
                      <div className="relative bg-white text-black px-4 py-2 rounded-xl rounded-br-none shadow-md">
                        <span className="block text-[11px]">
                          Thanks! That’s exactly what I needed.
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
                <span className="font-semibold text-black text-[20px]">Longevity</span>
                <p
                  className="text-[14px] font-medium text-dark mt-2 w-[73%]"
                >
                  We’re here for the long run. You can ask for updates anytime, we always stay connected, committed, and easy to reach.
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
                      {updatesCol1.map(({ title, time }, i) => (
                        <div key={i} className="relative w-36 h-20">
                          {/* Faded copy, offset down+right */}
                          <div
                            className="bg-white w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] opacity-40 absolute top-[3px] left-[3px] pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Original box on top */}
                          <div className="bg-white flex flex-col justify-between p-3 w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] relative">
                            <span className="block text-[12px]">{title}</span>
                            <span className="block text-[10px] text-dark/80">{time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Second col */}
                    <div
                      className="flex flex-col space-y-3"
                    >
                      {updatesCol2.map(({ title, time }, i) => (
                        <div key={i} className="relative w-36 h-20">
                          {/* Faded copy, offset down+right */}
                          <div
                            className="bg-white w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] opacity-40 absolute top-[3px] left-[3px] pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Original box on top */}
                          <div className="bg-white flex flex-col justify-between p-3 w-36 h-20 rounded-[5px] shadow-[inset_0_0_0_0.5px_#CDCDCD] relative">
                            <span className="block text-[12px]">{title}</span>
                            <span className="block text-[10px] text-dark/80">{time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testamonial section 1 */}
        <section
          className="
            2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
            flex flex-row justify-between
            py-[100px]
          "
        >
          {/* Left side */}
          <div className="flex flex-col justify-between relative space-y-3 max-w-[500px]">
            <div
              className=""
            >
              <span className="text-black text-[20px] font-semibold">
                BaCu Kozijnen
              </span>
              <p className="text-[16px] text-dark/80 font-medium mt-3">
                We created a 6-page website for BaCu Kozijnen, complete with clear and effective copywriting. The site showcases their products and services, builds credibility, and helps convert visitors into customers.
              </p>
              <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
                <span className="text-black text-[16px] font-medium rotate-1">#Regular</span>
              </span>
            </div>
            <a
              href="https://www.bacukozijnen.nl/"
              target="_blank"
              className="gap-x-2 w-fit flex flex-row justify-center items-center px-3 py-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
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
          <WebsiteSlides icon={<HouseIcon size={18} className="text-black" />} typeWebsite={"Windows & doors website"} imagesList={["/images/BaCu-primary.webp", "/images/BaCu-secondary.webp", "/images/BaCu-products.webp", "/images/BaCu-form.webp", "/images/BaCu-faq.webp"]} />

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
            <h3 className="text-[13px] md:text-[16px] text-dark/80 font-semibold">PRICING</h3>
            <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%] text-center xl:text-left">Clear plans<br />Without surprises</h2>
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
                    Landing
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

                    <span className="text-dark self-end ml-2 mb-2 font-medium text-[14px]">+</span>
                    <span
                      className="text-dark self-end mb-2 font-medium text-[14px] underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">/year</span>
                    </span>
                  </div>
                  <p className="mt-1 text-dark text-[15px] font-medium">A custom one-page website that presents your business professionally and generates new leads.</p>
                  {/* Stroke */}
                  <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                  <span className="text-[15px] font-bold" >Everything in Landing:</span>

                  {/* Pros */}
                  <ul
                    className="flex flex-col mt-5 gap-y-4"
                  >
                    {pricingFeatures[0].map((text, index) => (
                      <li key={index} className="flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <rect width="25" height="25" rx="12.5" fill="#CEE1FF" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z"
                            fill="#3B82F6"
                          />
                        </svg>
                        <span className="text-dark text-[15px] font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button */}
                  <a
                    href="https://calendly.com/nazar_yakov/yakoweb"
                    target="_blank"
                    className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#3B9EF6] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                  >
                    <div
                      className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                    >
                      <span
                        className="text-[#3B9EF6] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                      >
                        {/* Order your website */}
                        Book an Intro Call
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
                    <span className="relative text-dark px-2 text-sm font-medium">#most popular</span>
                  </span>

                  <span
                    className="font-bold text-[26px] text-black leading-[136.6%]"
                  >
                    Regular
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

                    <span className="text-dark self-end ml-2 mb-2 font-medium text-[14px]">+</span>
                    <span
                      className="text-dark self-end mb-2 font-medium text-[14px] underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">/year</span>
                    </span>
                  </div>
                  <p className="mt-1 text-dark text-[15px] font-medium">A multi-page website designed to present your complete service portfolio and build customer confidence.</p>
                  {/* Stroke */}
                  <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                  <span className="text-[15px] font-bold" >Everything in Landing, plus:</span>

                  {/* Pros */}
                  <ul
                    className="flex flex-col mt-5 gap-y-4"
                  >
                    {pricingFeatures[1].map((text, index) => (
                      <li key={index} className="flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                          <rect width="25" height="25" rx="12.5" fill="#E2E1FF"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#5A57C2"/>
                        </svg>
                        <span className="text-dark text-[15px] font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button */}
                  <a
                    href="https://calendly.com/nazar_yakov/yakoweb"
                    target="_blank"
                    className="bg-SecondaryBackground/50 w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#7652B3] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                  >
                    <div
                      className="select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                    >
                      <span
                        className="text-[#7652B3] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                      >
                        {/* Order your website */}
                        Book an Intro Call
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
                    Premium
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

                    <span className="text-dark self-end ml-2 mb-2 font-medium text-[14px]">+</span>
                    <span
                      className="text-dark self-end mb-2 font-medium text-[14px] underline"
                    >
                      €<span className="font-semibold text-[16px]">0</span><span className="">/year</span>
                    </span>
                  </div>
                  <p className="mt-1 text-dark text-[15px] font-medium">A full-scale website with additional features like configurators, API integrations, payment processing.</p>
                  {/* Stroke */}
                  <div className='bg-dark/80 w-full h-[0.5px] my-7' />

                  <span className="text-[15px] font-bold" >Everything in Regular, plus:</span>

                  {/* Pros */}
                  <ul
                    className="flex flex-col mt-5 gap-y-4"
                  >
                    {pricingFeatures[2].map((text, index) => (
                      <li key={index} className="flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <rect width="25" height="25" rx="12.5" fill="#FFE9CB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8089 7.69798L10.3506 14.8959L8.37142 12.7813C8.00684 12.4376 7.43392 12.4167 7.01725 12.7084C6.611 13.0105 6.49642 13.5417 6.74642 13.9688L9.09017 17.7813C9.31933 18.1355 9.71517 18.3542 10.1631 18.3542C10.5902 18.3542 10.9964 18.1355 11.2256 17.7813C11.6006 17.2917 18.7568 8.76048 18.7568 8.76048C19.6943 7.80215 18.5589 6.9584 17.8089 7.68756V7.69798Z" fill="#FF9500"/>
                        </svg>
                        <span className="text-dark text-[15px] font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Button */}
                  <a
                    href="https://calendly.com/nazar_yakov/yakoweb"
                    target="_blank"
                    className="w-full h-[53px] mt-10 mb-4 flex items-center justify-center rounded-[25px] border-[6px] border-[#FA8700] transform transition-all duration-300 ease-in-out group hover:-translate-y-0.5"
                  >
                    <div
                      className="bg-SecondaryBackground/50 select-none relative flex items-center justify-center w-full h-full rounded-[25px]"
                    >
                      <span
                        className="text-[#FA8700] transition-colors duration-300 ease-in-out text-[16px] font-bold"
                      >
                        Book an Intro Call
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        </section>

        {/* CTA */}
        <section
          className="flex flex-col gap-y-5 items-center justify-center text-center my-[120px]"
        >
          <h2 className="text-[28px] md:text-[32px] text-black font-bold leading-[114%]">Not sure what fits the best for you?</h2>
          <a
              href="https://calendly.com/nazar_yakov/yakoweb"
              target="_blank"
              className="w-[193px] h-[53px] flex items-center justify-center rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_0_3px_2px_rgba(255,255,255,0.3),inset_0_-3px_2px_rgba(0,0,0,0.1),inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)] p-[6px] transform transition-transform duration-300 ease-in-out group hover:-translate-y-0.5"
            >
              <div
                className="select-none relative flex items-center justify-center w-full h-full rounded-[25px] bg-gradient-to-r from-[#9568E3] to-[#563C83] shadow-[inset_1px_0_2px_rgba(0,0,0,0.3),inset_-1px_0_2px_rgba(255,255,255,0.3),inset_0_-1px_3px_rgba(0,0,0,0.1)]"
              >
                <span
                  className="text-white text-[15px] font-semibold"
                >
                  Book an Intro Call
                </span>
                <span
                  className="absolute text-white text-[15px] blur-xs group-hover:opacity-75 opacity-50 transform transition-opacity duration-300 ease-in-out font-semibold"
                  aria-hidden="true"
                >
                  Book an Intro Call
                </span>

              </div>
            </a>
        </section>
        
        {/* Testamonial section 2 */}
        <section
          className="
            2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
            flex flex-row justify-center gap-x-12
            py-[100px]
          "
        >
          {/* Left side */}
          <WebsiteSlides icon={<CarProfileIcon size={18} className="text-black" />} typeWebsite={"Auto services website"} imagesList={["/images/EK-primary.webp", "/images/EK-secondary.webp", "/images/EK-text.webp", "/images/EK-question.webp", "/images/EK-form.webp"]} />
          {/* Right side */}
          <div className="flex flex-col justify-between relative space-y-3 max-w-[450px]">
            <div
              className=""
            >
              <span className="text-black text-[20px] font-semibold">
                EK Autotechniek
              </span>
              <p className="text-[16px] text-dark/80 font-medium mt-3">
                We built a 9-page website for EK Autotechniek with full copywriting. It showcases their services and builds trust. We also set up the domain, business email, and hosting.              </p>
              <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
                <span className="text-black text-[16px] font-medium rotate-1">#Regular</span>
              </span>
            </div>
            <a
              href="https://www.ekautotechniek.nl/"
              target="_blank"
              className="gap-x-2 w-fit flex flex-row justify-center items-center px-3 py-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
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

        {/* Footer */}
        <footer
          className="border-t-[2px] border-dark/10 mt-16 pt-16 relative z-0 flex flex-col-reverse bg-[url('/backgrounds/footer.webp')] bg-[length:100%_auto] bg-no-repeat bg-bottom px-6 sm:px-12 xl:px-44"
        >
          {/* Below */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 font-medium text-dark text-[14px]">
            <span>Copyright © 2025 YakoWeb</span>
            <span className="text-xs sm:text-[14px] text-wrap sm:text-nowrap">We’re building this page section by section. Check back soon!</span>
            <div className="flex flex-row items-center gap-3">
              <a href="#" className="text-dark/70">EN</a>
              <div className="w-[1px] h-[28px] bg-dark" />
              <a>NL</a>
            </div>
          </div>

          {/* Line */}
          <div className="w-full h-[1px] bg-dark" />

          {/* Above */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-medium text-dark text-[14px]">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 max-w-full">
              <img src="/logos/YakoWeb.svg" alt="Logo" className="w-[130px] h-auto select-none" draggable="false" />
              <span className="max-w-[300px]">Convert strangers into customers and website overwhelm into a distant memory.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
              <a href="mailto:hello@yakoweb.com" className="max-w-[300px] hover:text-black transition-all duration-200 break-words">hello@yakoweb.com</a>
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
    </>
  );
}
