// app/layout.js
import './globals.css';
import { FontProvider } from './components/FontProvider';
import { AnalyticsScript } from './components/AnalyticsScript';
import { LayoutShell } from './components/LayoutShell';
import { NextIntlClientProvider } from 'next-intl';
import CookieBanner from './components/CookieBanner';
// import { metadata } from './metadata';

// export { metadata };

export default async function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="alternate" href="https://www.yakoweb.com/" hreflang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/privacyverklaring/" hreflang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/algemene-voorwaarden/" hreflang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/landing-thank-you/" hreflang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/standard-thank-you/" hreflang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/en/" hreflang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/privacy-policy/" hreflang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/terms-and-conditions/" hreflang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/landing-thank-you/" hreflang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/standard-thank-you/" hreflang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/" hreflang="x-default" />
      </head>
      <body>        
        <FontProvider>
          <AnalyticsScript />
          <NextIntlClientProvider>
            <LayoutShell>
              {children}
            </LayoutShell>
            <CookieBanner />
          </NextIntlClientProvider>
        </FontProvider>
      </body>
    </html>
  );
}
