"use client";

import { useState, useEffect } from 'react';
import { setCookieConsent, getCookieConsent } from '../utils/cookieConsent';

export default function CookiePreferencesModal({ isOpen, onClose, onSave }) {
  const [preferences, setPreferences] = useState({
    analytics: true
  });

  useEffect(() => {
    // Load existing preferences when modal opens
    if (isOpen) {
      const savedConsent = getCookieConsent();
      if (savedConsent) {
        setPreferences({
          analytics: savedConsent.analytics
        });
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    setCookieConsent(preferences);
    onSave();
  };

  const handleAcceptAll = () => {
    const allEnabled = { analytics: true };
    setCookieConsent(allEnabled);
    onSave();
  };

  const handleRejectAll = () => {
    const allDisabled = { analytics: false };
    setCookieConsent(allDisabled);
    onSave();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-dark/20 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Cookie-voorkeuren</h2>
        
        <div className="space-y-6">
          {/* Strictly Necessary Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium text-dark">
                Strikt noodzakelijke cookies
                <span className="text-gray-500 text-sm ml-2">(vereist)</span>
              </label>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-5 w-5 rounded border-gray-300 cursor-not-allowed"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Deze cookies zijn essentieel voor het goed functioneren van de website. Ze maken kernfuncties mogelijk zoals navigatie en beveiliging. Deze cookies kunnen niet worden uitgeschakeld.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium text-dark">Analytische cookies</label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="h-5 w-5 rounded border-gray-300 cursor-pointer"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken — bijvoorbeeld welke pagina's populair zijn of hoe lang mensen blijven. Dit stelt ons in staat om de prestaties en gebruiksvriendelijkheid te verbeteren. De verzamelde gegevens zijn anoniem en geaggregeerd.
            </p>
            <div className="flex flex-col text-sm text-gray-500 pl-2 gap-2 pt-2">
              <p>
                <span className="text-dark bg-gray-300 px-[3px] py-[2px] rounded-sm">
                  datafast_visitor_id
                </span>
                {' – '}Identificeert unieke bezoeken{' | '}1 jaar
              </p>
              <p>
                <span className="text-dark bg-gray-300 px-[3px] py-[2px] rounded-sm">
                  datafast_session_id
                </span>
                {' – '}Volgt sessie-activiteit{' | '}30 minuten
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 pt-4 border-t border-dark/30">
          <button
            onClick={handleRejectAll}
            className="cursor-pointer px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200 w-full sm:w-auto"
          >
            Weigeren
          </button>
          <button
            onClick={handleSave}
            className="cursor-pointer px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200 w-full sm:w-auto"
          >
            Voorkeuren opslaan
          </button>
          <button
            onClick={handleAcceptAll}
            className="cursor-pointer px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
} 