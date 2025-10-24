import { ArrowSquareOutIcon, HouseIcon } from '@phosphor-icons/react';
import React from 'react';
import WebsiteSlides from './WebsiteSlides';

function BaCuKozijnenCasePreview({className}) {
    return (
        <section
            id="bacu-kozijnen"
            className={`
                2xl:px-48 xl:px-36 lg:px-28 md:px-14 sm:px-16 px-8
                flex flex-col-reverse xl:flex-row gap-y-12 xl:gap-y-0 justify-between
                ${className}
            `}
        >
            {/* Left side */}
            <div className="self-center xl:self-auto flex flex-col justify-between relative space-y-3 max-w-[550px]">
            <div>
                <span className="text-black text-[20px] font-semibold">
                    BaCu Kozijnen
                </span>
                <p className="text-[16px] text-dark/80 font-medium mt-3">
                    We hebben een 6-pagina website gemaakt voor BaCu Kozijnen, compleet met heldere en effectieve copywriting. De site toont hun producten en diensten, bouwt geloofwaardigheid op en helpt bezoekers om te zetten naar klanten.
                </p>
                <span className="inline-flex items-center bg-[#C36CFF]/20 px-1 w-fit -rotate-1 mt-5">
                <span className="text-black text-[16px] font-medium rotate-1">#Zilver</span>
                </span>
            </div>
            <a
                href="https://www.bacukozijnen.nl/"
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
            <WebsiteSlides icon={<HouseIcon size={18} className="text-black" />} typeWebsite={"Kozijnenbedrijf in Almere"} imagesList={["/images/BaCu-primary.webp", "/images/BaCu-secondary.webp", "/images/BaCu-products.webp", "/images/BaCu-form.webp", "/images/BaCu-faq.webp"]} />

      </section>
    );
}

export default BaCuKozijnenCasePreview;