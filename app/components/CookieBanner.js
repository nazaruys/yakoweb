"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import CookiePreferencesModal from './CookiePreferencesModal';
import { setCookieConsent, hasCookieConsent } from '../utils/cookieConsent';

export default function CookieBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('cookies.banner');

  useEffect(() => {
    // Show banner only if consent hasn't been given
    setIsVisible(!hasCookieConsent());
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent({ analytics: true });
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    setCookieConsent({ analytics: false });
    setIsVisible(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePreferencesSave = () => {
    setIsModalOpen(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed flex lg:flex-row flex-col justify-center items-center bottom-0 z-50 w-full bg-SecondaryBackground px-4 lg:px-8 py-4 lg:py-6 border-t border-dark/20 text-sm text-black gap-4 lg:gap-x-16"
        style={{ boxShadow: '0 -6px 10px rgba(0, 0, 0, 0.1)' }}
      >
        <p className="text-[15px] text-center lg:text-left">
          {t('message')}{' '}
          <a href={t('privacyPath')} className="underline text-blue-600 hover:text-blue-800">
            {t('privacyLink')}
          </a>
          .
        </p>
        <div className="flex flex-col-reverse lg:flex-row gap-2 w-full lg:w-auto">
          <button 
            onClick={handleRejectAll}
            className="cursor-pointer px-5 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200 w-full lg:w-auto"
          >
            {t('rejectAll')}
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer px-5 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200 w-full lg:w-auto"
          >
            {t('customize')}
          </button>
          <button 
            onClick={handleAcceptAll}
            className="cursor-pointer px-5 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 w-full lg:w-auto"
          >
            {t('acceptAll')}
          </button>
        </div>
      </div>

      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handlePreferencesSave}
      />
    </>
  );
}