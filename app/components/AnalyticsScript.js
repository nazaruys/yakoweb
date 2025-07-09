'use client';

import Script from 'next/script';

export function AnalyticsScript() {
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
