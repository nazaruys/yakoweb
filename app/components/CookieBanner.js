"use client";

import { useState, useEffect } from 'react';
import CookiePreferencesModal from './CookiePreferencesModal';
import { setCookieConsent, hasCookieConsent } from '../utils/cookieConsent';

export default function CookieBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    setIsVisible(false); // Hide banner when modal is closed (preferences were saved)
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed flex flex-row justify-center items-center bottom-0 z-50 w-full bg-SecondaryBackground gap-x-16 py-5 border-t border-dark/20 text-sm text-black"
        style={{ boxShadow: '0 -6px 10px rgba(0, 0, 0, 0.1)' }}
      >
        <p className="">
          We use cookies to improve your experience. See our{' '}
          <a href="/privacy-policy" className="underline text-blue-600 hover:text-blue-800">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex justify-end gap-2">
          <button 
            onClick={handleRejectAll}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Reject All
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Customize
          </button>
          <button 
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
          >
            Accept All
          </button>
        </div>
      </div>

      <CookiePreferencesModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleModalClose}
      />
    </>
  );
}