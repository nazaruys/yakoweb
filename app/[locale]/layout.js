import '../globals.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { FontProvider } from '../components/FontProvider';
import { AnalyticsScript } from '../components/AnalyticsScript';
import { LayoutShell } from '../components/LayoutShell';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  title: 'YakoWeb | Verander bezoekers in klanten en website-stress in een verre herinnering.',
  description:
    'Wij ontwerpen en ontwikkelen snelle, responsieve websites die jouw merk weerspiegelen, bezoekers betrekken en zorgen voor meer verkoop. Of je nu vanaf nul begint of een complete website-vernieuwing nodig hebt.',

  robots: 'index, follow',

  openGraph: {
    title: 'YakoWeb',
    description:
      'Verander bezoekers in klanten en website-stress in een verre herinnering.',
    url: 'https://www.yakoweb.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.yakoweb.com/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'YakoWeb Hero Afbeelding',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'YakoWeb',
    description:
      'Turn visitors into customers and website overwhelm into a distant memory.',
    site: '@nazar_yakov',
    images: ['https://www.yakoweb.com/images/heroEN.png'],
  },

  themeColor: '#F2F5F9',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* hrefLang */}
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
