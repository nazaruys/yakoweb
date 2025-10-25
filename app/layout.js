import './globals.css';
import { FontProvider } from './components/FontProvider';
import { LayoutShell } from './components/LayoutShell';
import { GA_MEASUREMENT_ID } from './lib/gtag';
import Script from 'next/script';
import AnalyticsTracker from './components/analytics-tracker';


export default async function RootLayout({ children, pageMetadata }) {
  const defaultMetadata = {
    title: "Moderne websites voor vakbedrijven | YakoWeb",
    description: "Snelle, responsieve websites die jouw merk weerspiegelen en bezoekers betrekken. Voor vakbedrijven die meer klanten willen met een moderne website.",
  };

  const metadata = { ...defaultMetadata, ...pageMetadata };

  return (
    <html lang="nl">
      <head>
        {/* Title and Description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* <!-- Canonical --> */}
        <link rel="canonical" href="https://www.yakoweb.com" />

        {/* <!-- Robots --> */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* <!-- Open Graph --> */}
        <meta property="og:title" content="YakoWeb" />
        <meta property="og:description" content="Verander bezoekers in klanten en website-stress in een verre herinnering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yakoweb.com" />
        <meta property="og:site_name" content="YakoWeb" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:image" content="https://www.yakoweb.com/images/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="YakoWeb Hero Afbeelding" />
        <meta property="og:image:type" content="image/png" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YakoWeb" />
        <meta name="twitter:description" content="Verander bezoekers in klanten en website-stress in een verre herinnering." />
        <meta name="twitter:site" content="@nazar_yakov" />
        <meta name="twitter:creator" content="@nazar_yakov" />
        <meta name="twitter:image" content="https://www.yakoweb.com/images/hero.png" />
        <meta name="twitter:image:alt" content="YakoWeb Hero Afbeelding" />

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
        <AnalyticsTracker />
        <FontProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
        </FontProvider>
      </body>
    </html>
  );
}
