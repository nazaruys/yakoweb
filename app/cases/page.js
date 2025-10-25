"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from '../components/Navbar';
import HeroButtonPrimary from '../components/HeroButtonPrimary';
import EKAutotechniekCasePreview from '../components/EKAutotechniekCasePreview';
import BaCuKozijnenCasePreview from '../components/BaCuKozijnenCasePreview';
import SAMeubelsCasePreview from '../components/SAMeubelsCasePreview';
import Footer from '../components/Footer';

export default function Cases() {
    const pathname = usePathname();

    return (
        <div
            className="font-manrope bg-background pt-[100px]"
        >
            <Navbar currentPage={pathname}/>
            {/* Hero */}
            <section
                className="
                    2xl:px-48 xl:px-52 lg:px-32 md:px-24 sm:px-20 px-8
                    py-[60px] sm:py-[80px] xl:py-[100px]
                    flex flex-col md:flex-row justify-between
                "
            >
                {/* Left - 60% */}
                <div className="col-span-3 flex flex-col justify-center">
                    <h1
                        className="text-3xl sm:text-5xl xl:text-[52px] font-bold leading-[110%]"
                    >
                        Cases
                    </h1>
                    <p
                        className="text-left text-2xl text-dark/80 font-medium mt-5 gap-3"
                    >
                        Digitale oplossingen die impact maken<br/>voor tevreden klanten. Daar zijn we trots op.
                    </p>
                </div>
                {/* Right - 40% */}
                <div className="mt-8 md:mt-0 col-span-2 flex flex-col md:justify-end md:items-end">
                    <HeroButtonPrimary href="/#contact" text="Neem contact op" />
                </div>
            </section>
            {/* BaCu Kozijnen */}
            <SAMeubelsCasePreview className={"py-[80px]"} />
            {/* EK Autotechniek */}
            <EKAutotechniekCasePreview className={"py-[80px]"}/>
            {/* BaCu Kozijnen */}
            <BaCuKozijnenCasePreview className={"py-[80px]"} />
            {/* CTA */}
            <section
                className="flex flex-col px-12 gap-y-5 items-center justify-center text-center my-[120px]"
            >
                <h2 className="mb-4 text-[28px] md:text-[32px] text-black font-bold leading-[114%]">Zien we jouw project hier binnenkort?</h2>
                <HeroButtonPrimary href={"/#contact"} text={"Neem contact op"}/>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}