import { ArrowSquareOutIcon, DresserIcon, HouseIcon } from '@phosphor-icons/react';
import React from 'react';
import WebsiteSlides from './WebsiteSlides';

function SAMeubelsCasePreview({className}) {
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
                        SA Meubels
                    </span>
                    <p className="text-[16px] text-dark/80 font-medium mt-3">
                        Een overzichtelijke 4-pagina website gericht op vindbaarheid en conversie. Met uitgebreide projectgalerij en directe offerteaanvraag. Ook het Google Bedrijfsprofiel hebben wij volledig opgezet en geoptimaliseerd voor lokale zichtbaarheid.
                    </p>
                    <span className="inline-flex items-center bg-secondary/20 px-1 w-fit -rotate-1 mt-5">
                    <span className="text-black text-[16px] font-medium rotate-1">#Bronz</span>
                    </span>
                </div>
                <a
                    href="/cases/sameubels"
                    className="mt-6 xl:mt-0 gap-x-2 w-fit flex flex-row justify-center items-center px-5 py-2 bg-primary rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
                >
                    <span
                        className="text-white text-sm font-semibold"
                    >
                        Bekijk Case
                    </span>
                </a>
            </div>

            {/* Right side */}
            <WebsiteSlides icon={<DresserIcon size={18} className="text-black" />} typeWebsite={"Meubelmakerij in Harderwijk"} imagesList={["/sameubels/natural-screenshots/1.webp", "/sameubels/natural-screenshots/2.webp", "/sameubels/natural-screenshots/3.webp", "/sameubels/natural-screenshots/4.webp", "/sameubels/natural-screenshots/5.webp", "/sameubels/natural-screenshots/8.webp", "/sameubels/natural-screenshots/7.webp", "/sameubels/natural-screenshots/9.webp",]} />

      </section>
    );
}

export default SAMeubelsCasePreview;