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
        <link rel="alternate" href="https://www.yakoweb.com/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/privacyverklaring/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/algemene-voorwaarden/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/landing-thank-you/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/standard-thank-you/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/privacy-policy/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/terms-and-conditions/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/landing-thank-you/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/standard-thank-you/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/" hrefLang="x-default" />
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
