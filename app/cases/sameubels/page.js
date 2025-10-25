"use client"
import Footer from "@/app/components/Footer";
import HeroButtonPrimary from "@/app/components/HeroButtonPrimary";
import Navbar from "@/app/components/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function SAMeubelsPagina() {
    const pathname = usePathname();
    const [hover, setHover] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 5; // start at 3 seconds
          videoRef.current.play(); // ensure it plays
        }
      }, []);

    return (
        <div
            className="font-manrope bg-background pt-[100px]"
        >
            <Navbar currentPage={pathname}/>
            {/* Hero */}
            <section
                className="
                    2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-4
                    py-[60px] sm:py-[80px] xl:py-[100px]
                    grid grid-cols-1 md:grid-cols-5 w-full h-auto gap-8
                "
            >
                {/* Left - 60% */}
                <div className="md:col-span-3 col-span-1 flex flex-col justify-center mb-8 md:mb-0">
                    <span className="text-dark mb-4"><a href="/" className="hover:underline">Home</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a className="hover:underline" href="/cases">Cases</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a className="hover:underline" href="/cases/sameubels">SA Meubels</a></span>
                    <h1
                        className="text-3xl sm:text-5xl xl:text-[52px] font-bold leading-[110%]"
                    >
                        De Digitale Transformatie van SA Meubels Op Maat
                    </h1>
                    <p
                        className="text-left text-xl text-dark/80 font-medium mt-5 mb-8 gap-3"
                    >
                        Van leeg domein naar online succes: realisatie van een unieke, conversiegerichte 4-pagina website en geoptimaliseerde Google Business Profile voor maximale lokale vindbaarheid.
                    </p>
                    <HeroButtonPrimary target="_blank" href={"https://www.sameubels.nl/"} text="Bekijk Online" />
                </div>
                {/* Right - 40% */}
                <div className="md:col-span-2 col-span-1 flex flex-col justify-center items-center md:justify-end md:items-end">
                    <img
                        src='/sameubels/mockup.webp'
                        alt="Website mockup van SA Meubels"
                        className="w-full h-auto max-w-xs md:max-w-full"
                    />
                </div>
            </section>
            {/* Video */}
            <div
                className="py-[60px] sm:py-[80px] px-4 relative w-full max-w-3xl mx-auto overflow-hidden"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                <video
                    ref={videoRef}
                    className="w-full h-auto block rounded-2xl"
                    src="https://pub-67c0322ec02f4c4b92a770f575604fc0.r2.dev/Meubels%20op%20Maat%20Laten%20Maken%20Harderwijk%20_%20SA%20Meubels%20-%20Google%20Chrome%202025-10-24%2012-39-36.mp4"
                    poster="/sameubels/natural-screenshots/1.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={hover}
                    preload="metadata"
                />
            </div>
            {/* Over klant */}
            <section
				className="flex flex-col md:flex-row items-stretch 2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-4 gap-y-8 md:gap-y-12 xl:gap-x-32 pt-[60px] sm:py-[80px] xl:py-[100px]"
			>
				<div className="w-full md:w-[50%] flex items-stretch mb-8 md:mb-0">
                    <img
                        src="/sameubels/kantoor.webp"
                        alt="Kantoor van SA Meubels"
                        className="w-full h-full object-cover object-center rounded-xl"
                    />
                </div>
				<div className="w-full md:w-[50%] flex flex-col justify-center my-4 md:my-12">
					<h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-bold leading-[120%]">Over SA Meubels Op Maat</h2>
					<p className="flex flex-col text-left text-md sm:text-lg text-dark/80 font-medium mt-5 gap-3">
						<span>SA Meubels Op Maat is een meubelmaker die actief is in Harderwijk, Gelderland. Voordat dit project startte, had SA Meubels een domein dat al jaren leegstond. Bovendien was hun Google Business Profile niet geclaimd en slecht geoptimaliseerd.</span>
					</p>
				</div>
            </section>
            {/* De uitdaging */}
            <section
				className="flex flex-col md:flex-row items-stretch 2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-4 gap-y-8 md:gap-y-12 xl:gap-x-32 pt-[60px] sm:py-[80px] xl:py-[100px]"
			>
				<div className="w-full md:w-[60%] flex flex-col justify-center my-4 md:my-12">
					<h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-bold leading-[120%]">Dit was onze uitdaging</h2>
					<p className="flex flex-col text-left text-md sm:text-lg text-dark/80 font-medium mt-5 gap-3">
						<span>SA Meubels Op Maat uit Harderwijk had jarenlang een leeg domein liggen - onbenutte digitale ruimte terwijl potentiële klanten online naar meubelmakers zochten. Het bedrijf miste niet alleen een professionele online uitstraling, maar was praktisch onvindbaar voor mensen die op zoek waren naar maatwerk meubels in de regio.</span>
						<span>De uitdagingen waren duidelijk: er was geen website die de vakmanschap en kwaliteit van SA Meubels kon tonen, het Google Business Profile was niet geclaimd en was niet geoptimaliseerd, en er was geen enkele strategie om online zichtbaar te worden in een competitieve lokale markt.</span>
						<span>Onze opdracht was helder maar veeleisend: bouw een website die niet alleen mooi is, maar die ook daadwerkelijk gevonden wordt door de juiste klanten én ze overtuigt om contact op te nemen. Een website die werkt als een digitale verkoper, 24/7 beschikbaar om projecten binnen te halen.</span>
					</p>
				</div>
                <div className="w-full md:w-[40%] flex items-stretch mt-8 md:mt-0">
                    <img
                        src="/sameubels/sameubels-before.webp"
                        alt="SA Meubels oude situatie"
                        className="hidden md:block w-full h-full object-cover object-center rounded-xl"
                    />
                </div>
            </section>
            {/* Review */}
            <section
                className="flex flex-col justify-center items-center py-12 md:py-28 px-4 md:px-40"
            >
                <div className="flex flex-row">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-8 text-yellow-500"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                        />
                    </svg>
                    ))}
                </div>

                <h3 className="mt-6 mb-10 text-center text-2xl md:max-w-[50%]">"Zeer tevreden met de resultaat. Prima communicatie. <strong>Al aan een vriend aangeraden.</strong>"</h3>

                <div
                    className="flex flex-row justify-center items-center gap-4"
                >
                    <img 
                        src='/sameubels/logo.png'
                        className='w-14 h-auto rounded-full'
                    />
                    <span className="text-lg font-semibold">Serkan - SA Meubels</span>
                </div>
            </section>
            {/* Foto's */}
            <section
                className="grid grid-cols-1 md:grid-cols-3 justify-center items-start xl:px-72 lg:px-32 md:px-24 sm:px-20 px-4 py-[60px] sm:py-[80px] xl:py-[100px] gap-4"
                >
                <div
                    className="w-full col-span-1 flex flex-row justify-center md:justify-start"
                >
                    <img
                        src="/sameubels/GBP.webp"
                        alt="Google bedrijfsprofiel van SA Meubels"
                        className="w-[60%] md:w-full h-auto object-contain object-center rounded-xl"
                    />
                </div>
                <div className="flex flex-col items-center gap-4 col-span-1 md:col-span-2">
                    <img
                    src="/sameubels/resultaat.webp"
                    alt="Google Bedrijfsprofiel optimalisatie resultaat SA Meubels"
                    className="w-full h-auto object-contain object-center rounded-xl"
                    />
                    <img
                    src="/sameubels/SEO100.webp"
                    alt="SEO score van SA Meubels"
                    className="w-full h-auto object-contain object-center rounded-xl"
                    />
                </div>
            </section>
            {/* Resultaat */}
            <section
				className="flex flex-col md:flex-row items-stretch 2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-4 gap-y-8 md:gap-x-12 xl:gap-x-32 sm:py-[80px] xl:py-[100px]"
			>
				<div className="hidden md:flex w-full md:w-[40%] items-stretch md:mb-0">
                    <img
                        src="/sameubels/home-small.webp"
                        alt="SA Meubels homepage voorbeeld"
                        className="w-full h-full object-cover object-center rounded-xl"
                    />
                </div>
				<div className="w-full md:w-[60%] flex flex-col justify-center my-4 md:my-12">
					<h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-bold leading-[120%]">Het resultaat</h2>
					<h3 className="text-lg sm:text-2xl text-black font-semibold mt-4">Van onzichtbaar naar vindbaar binnen één week</h3>
					<p className="flex flex-col text-left text-md sm:text-lg text-dark/80 font-medium mt-5 gap-3">
						<span>SA Meubels Op Maat heeft nu een strategische 4-pagina website die hoog scoort op Google voor relevante zoektermen zoals "meubelmaker Harderwijk". De website combineert professionele foto's met slimme vindbaarheid - en zet bezoekers om in klanten dankzij WhatsApp- en offerteaanvraag-knoppen op elke pagina. De website hebben wij binnen één week na het eerste contact geleverd.</span>
					</p>
					<h3 className="text-lg sm:text-2xl text-black font-semibold mt-4">Lokale dominantie</h3>
					<p className="flex flex-col text-left text-md sm:text-lg text-dark/80 font-medium mt-5 gap-3">
						<span>Het geoptimaliseerde Google Business Profile zorgt ervoor dat SA Meubels prominent verschijnt in lokale zoekresultaten. Met Google Analytics en Search Console volledig geïntegreerd, zien we precies welke keywords werken en waar bezoekers vandaan komen.</span>
					</p>
					<h3 className="text-lg sm:text-2xl text-black font-semibold mt-4">Doorlopende groei</h3>
					<p className="flex flex-col text-left text-md sm:text-lg text-dark/80 font-medium mt-5 gap-3">
						<span>Onze continue ondersteuning houdt de website fris met nieuwe projectfoto's en reviews, terwijl SA Meubels zich kan concentreren op wat ze het beste doen: prachtige meubels op maat maken.</span>
					</p>	
				</div>
            </section>
            {/* CTA */}
            <section
                className="flex flex-col px-4 md:px-12 gap-y-5 items-center justify-center text-center my-[60px] md:my-[120px]"
            >
                <h2 className="mb-4 text-[28px] md:text-[32px] text-black font-bold leading-[114%]">Klaar voor jouw digitale transformatie?</h2>
                <HeroButtonPrimary href={"/#contact"} text={"Neem contact op"}/>
            </section>
            <Footer />
        </div>
    );
}