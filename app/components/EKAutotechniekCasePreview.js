import { ArrowSquareOutIcon, CarProfileIcon } from '@phosphor-icons/react';
import React from 'react';
import WebsiteSlides from './WebsiteSlides';

function EKAutotechniekCasePreview({className}) {
    return (
        <section
            id="ek-autotechniek"
            className={`
                2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
                flex flex-col xl:flex-row justify-center gap-y-12 xl:gap-y-0 gap-x-12
                ${className}
            `}
        >
            {/* Left side */}
            <WebsiteSlides icon={<CarProfileIcon size={18} className="text-black" />} typeWebsite={"Autobedrijf in Almere"} imagesList={["/images/EK-primary.webp", "/images/EK-secondary.webp", "/images/EK-text.webp", "/images/EK-question.webp", "/images/EK-form.webp"]} />
            {/* Right side */}
            <div className="self-center xl:self-auto flex flex-col justify-between relative space-y-3">
                <div
                    className=""
                >
                    <span className="text-black text-[20px] font-semibold">
                        EK Autotechniek
                    </span>
                    <p className="text-[16px] text-dark/80 font-medium mt-3">
                        We hebben een 9-pagina website gebouwd voor EK Autotechniek, autobedrijf in Almere. Bezoekers kunnen alle diensten zien en contact opnemen. We hebben ook alle andere onderdelen geleverd, zoals SEO-optimalisatie, domein, zakelijke e-mail en meer.
                    </p>
                    <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
                        <span className="text-black text-[16px] font-medium rotate-1">#Zilver</span>
                    </span>
                </div>
                <a
                href="https://www.ekautotechniek.nl/"
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
    );
}

export default EKAutotechniekCasePreview;