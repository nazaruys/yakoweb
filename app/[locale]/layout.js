import '../globals.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { FontProvider } from '../components/FontProvider';
import { AnalyticsScript } from '../components/AnalyticsScript';
import { LayoutShell } from '../components/LayoutShell';
import CookieBanner from '../components/CookieBanner';
// import { usePathname } from 'next/navigation';

export async function generateMetadata({ params: { locale }, parent }) {
  const heroImage = locale === 'en' ? 'heroEN.png' : 'hero.png';
  const imageUrl = `https://www.yakoweb.com/images/${heroImage}`;
  
  // Get the current path from parent metadata
  const parentMetadata = await parent;
  const path = parentMetadata?.openGraph?.url || '';
  
  // Extract the path part after the locale (if any)
  const pathWithoutLocale = path.replace(/^https:\/\/www\.yakoweb\.com(\/en)?/, '') || '/';
  const canonicalUrl = `https://www.yakoweb.com${locale === 'en' ? '/en' : ''}${pathWithoutLocale}`;
  
  return {
    title: `YakoWeb | ${locale === 'en' 
      ? 'Turn visitors into customers and website overwhelm into a distant memory.'
      : 'Verander bezoekers in klanten en website-stress in een verre herinnering.'
    }`,
    description: locale === 'en'
      ? 'We design and develop fast, responsive websites that reflect your brand, engage visitors, and drive more sales. Whether you\'re starting from scratch or need a complete website overhaul.'
      : 'Wij ontwerpen en ontwikkelen snelle, responsieve websites die jouw merk weerspiegelen, bezoekers betrekken en zorgen voor meer verkoop. Of je nu vanaf nul begint of een complete website-vernieuwing nodig hebt.',

    metadataBase: new URL('https://www.yakoweb.com'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1
      }
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://www.yakoweb.com',
        'en': 'https://www.yakoweb.com/en',
      },
    },

    openGraph: {
      title: 'YakoWeb',
      description: locale === 'en'
        ? 'Turn visitors into customers and website overwhelm into a distant memory.'
        : 'Verander bezoekers in klanten en website-stress in een verre herinnering.',
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'nl_NL',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: locale === 'en' ? 'YakoWeb Hero Image' : 'YakoWeb Hero Afbeelding',
          type: 'image/png',
        },
      ],
      siteName: 'YakoWeb',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'YakoWeb',
      description: locale === 'en'
        ? 'Turn visitors into customers and website overwhelm into a distant memory.'
        : 'Verander bezoekers in klanten en website-stress in een verre herinnering.',
      site: '@nazar_yakov',
      creator: '@nazar_yakov',
      images: {
        url: 'https://www.yakoweb.com/images/heroEN.png',
        alt: 'YakoWeb Hero Image'
      },
    },

    themeColor: '#F2F5F9',
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* hrefLang */}
        <link rel="alternate" href="https://www.yakoweb.com/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/privacy/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/terms/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/landing-thank-you/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/standard-thank-you/" hrefLang="nl" />
        <link rel="alternate" href="https://www.yakoweb.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/privacy/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/terms/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/landing-thank-you/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/en/standard-thank-you/" hrefLang="en" />
        <link rel="alternate" href="https://www.yakoweb.com/" hrefLang="x-default" />
        
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
