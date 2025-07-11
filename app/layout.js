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
