'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getCookieConsent } from '../utils/cookieConsent';

export function AnalyticsScript() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    setAnalyticsEnabled(consent?.analytics === true);

    // Listen for changes in cookie consent
    const handleStorageChange = () => {
      const updatedConsent = getCookieConsent();
      setAnalyticsEnabled(updatedConsent?.analytics === true);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!analyticsEnabled) return null;

  return (
    <Script
      defer
      data-website-id="686d163ca0d146cfba8aaa3a"
      data-domain="www.yakoweb.com"
      src="https://datafa.st/js/script.js"
      strategy="afterInteractive"
    />
  );
}
