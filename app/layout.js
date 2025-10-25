import './globals.css';
import { FontProvider } from './components/FontProvider';
import { AnalyticsScript } from './components/AnalyticsScript';
import { LayoutShell } from './components/LayoutShell';
import CookieBanner from './components/CookieBanner';
import { GA_MEASUREMENT_ID } from './lib/gtag';
import Script from 'next/script';
import AnalyticsTracker from './components/analytics-tracker';

export async function generateMetadata({ params, parent }) {
  const heroImage = 'hero.png';
  const imageUrl = `https://www.yakoweb.com/images/${heroImage}`;
  
  // Get the current path from parent metadata
  const parentMetadata = await parent;
  const path = parentMetadata?.openGraph?.url || '';
  
  // Extract the path part
  const pathWithoutLocale = path.replace(/^https:\/\/www\.yakoweb\.com/, '') || '/';
  const canonicalUrl = `https://www.yakoweb.com${pathWithoutLocale}`;
  
  return {
    title: 'YakoWeb | Verander bezoekers in klanten en website-stress in een verre herinnering.',
    description: 'Wij ontwerpen en ontwikkelen snelle, responsieve websites die jouw merk weerspiegelen, bezoekers betrekken en zorgen voor meer verkoop. Of je nu vanaf nul begint of een complete website-vernieuwing nodig hebt.',

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
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://www.yakoweb.com',
      },
    },

    openGraph: {
      title: 'YakoWeb',
      description: 'Verander bezoekers in klanten en website-stress in een verre herinnering.',
      url: canonicalUrl,
      type: 'website',
      locale: 'nl_NL',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'YakoWeb Hero Afbeelding',
          type: 'image/png',
        },
      ],
      siteName: 'YakoWeb',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'YakoWeb',
      description: 'Verander bezoekers in klanten en website-stress in een verre herinnering.',
      site: '@nazar_yakov',
      creator: '@nazar_yakov',
      images: {
        url: 'https://www.yakoweb.com/images/hero.png',
        alt: 'YakoWeb Hero Afbeelding'
      },
    },
  };
}

export default async function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        {/* gtag.js: loads the GA library */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        {/* initialize gtag and set anonymize_ip + disable automatic page_view to control SPA pageviews */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Important: anonymize_ip true, and disable automatic page_view so we control pageviews.
            gtag('config', '${GA_MEASUREMENT_ID}', {
              anonymize_ip: true,
              send_page_view: false
            });
          `}
        </Script>
        
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>        
        <FontProvider>
          <LayoutShell>
            <AnalyticsTracker />
            {children}
          </LayoutShell>
        </FontProvider>
      </body>
    </html>
  );
}
