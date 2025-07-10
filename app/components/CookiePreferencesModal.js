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
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled = { analytics: true };
    setCookieConsent(allEnabled);
    onClose();
  };

  const handleRejectAll = () => {
    const allDisabled = { analytics: false };
    setCookieConsent(allDisabled);
    onClose();
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
        <h2 className="text-xl font-semibold mb-4">Cookie Preferences</h2>
        
        <div className="space-y-6">
          {/* Strictly Necessary Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium text-dark">
                Strictly Necessary Cookies
                <span className="text-gray-500 text-sm ml-2">(required)</span>
              </label>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>
            <p className="text-gray-600 text-sm">
              These cookies are essential for the website to function properly. They enable core features like page navigation and security. These cookies cannot be disabled.
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium text-dark">Analytics Cookies</label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>
            <p className="text-gray-600 text-sm">
              These cookies help us understand how visitors use our website — for example, which pages are popular or how long people stay. This allows us to improve performance and usability. The data collected is anonymous and aggregated.
            </p>
            <div className="flex flex-col text-sm text-gray-500 pl-2 gap-2 pt-2">
              <p><span className="text-dark bg-gray-300 px-[3px] py-[2px] rounded-sm">datafast_visitor_id</span> – Identifies unique visits | Duration - 1 year</p>
              <p><span className="text-dark bg-gray-300 px-[3px] py-[2px] rounded-sm">datafast_session_id</span> – Tracks session-level activity | Duration - 30 minutes</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-dark/30">
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Reject all
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Save my preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white hover:bg-blue-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
} 