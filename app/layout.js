// app/layout.js
import './globals.css';
import { FontProvider } from './components/FontProvider';
import { AnalyticsScript } from './components/AnalyticsScript';
import { LayoutShell } from './components/LayoutShell';
import { NextIntlClientProvider } from 'next-intl';
import CookieBanner from './components/CookieBanner';
import SetHtmlLang from './components/SetHtmlLang';
// import { metadata } from './metadata';

// export { metadata };

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SetHtmlLang lang={"nl"}/>
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
