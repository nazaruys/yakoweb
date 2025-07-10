// app/layout.js
import './globals.css';
import { FontProvider } from './components/FontProvider';
import { AnalyticsScript } from './components/AnalyticsScript';
import { LayoutShell } from './components/LayoutShell';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import CookieBanner from './components/CookieBanner';
// import { metadata } from './metadata';

// export { metadata };

export default async function RootLayout({ children, params }) {
  const locale = params?.locale || 'en';
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <FontProvider>
          <AnalyticsScript />
          <NextIntlClientProvider locale={locale} messages={messages}>
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
