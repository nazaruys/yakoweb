import React from 'react';
import nlTranslations from '../../messages/nl.json';
import Link from 'next/link';
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon, XLogoIcon } from '@phosphor-icons/react';

function Footer() {
    const nl = nlTranslations.HomePage;

    return (
        <footer
        className="border-t-[2px] border-dark/10 mt-16 pt-16 relative z-0 flex flex-col-reverse bg-[url('/backgrounds/footer.webp')] bg-[length:100%_auto] bg-no-repeat bg-bottom px-6 sm:px-12 xl:px-44"
    >
        {/* Below */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 font-medium text-dark text-[14px]">
            <div className="flex flex-row gap-x-4">
                <span>{nl.footer.copyright}</span>
                <Link
                href={nl.footer.termsPage}
                className="underline"
                >
                {nl.footer.terms}
                </Link>
                <Link
                href={nl.footer.privacyPage}
                className="underline"
                >
                {nl.footer.privacy}
                </Link>
                <Link
                href={nl.footer.cookiesPage}
                className="underline"
                >
                Cookies
                </Link>
            </div>

            </div>

            {/* Line */}
            <div className="w-full h-[1px] bg-dark" />

            {/* Above */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 font-medium text-dark text-[14px]">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 max-w-full">
                <img src="/logos/YakoWeb.svg" alt="Logo" className="w-[130px] h-auto select-none" draggable="false" />
                <span className="max-w-[300px]">{nl.footer.description}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
                <a onClick={() => {trackGoal('email_us', 'Email us')}}href="mailto:hello@yakoweb.com" className="max-w-[300px] hover:text-black transition-all duration-200 break-words">{nl.footer.email}</a>
                <div className="flex flex-row gap-3">
                <a aria-label={nl.footer.socialLinks.xProfile} target="_blank" href="https://wa.me/+31631194410" className="group">
                    <WhatsappLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a aria-label={nl.footer.socialLinks.xProfile} target="_blank" href="https://x.com/nazar_yakov" className="group">
                    <XLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a aria-label={nl.footer.socialLinks.instagramProfile} target="_blank" href="https://www.instagram.com/yako.web/" className="group">
                    <InstagramLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a aria-label={nl.footer.socialLinks.facebookProfile} target="_blank" href="https://www.facebook.com/nazar.yakov" className="group">
                    <FacebookLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                <a aria-label={nl.footer.socialLinks.linkedInProfile} target="_blank" href="https://www.linkedin.com/in/nazar-yakov/" className="group">
                    <LinkedinLogoIcon size={24} className="text-[#2D2D2D] group-hover:text-black transition-colors duration-200" />
                </a>
                </div>
            </div>
        </div>
      </footer>
    );
}

export default Footer;