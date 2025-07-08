import { Manrope } from 'next/font/google';
import Script from 'next/script';
import '../globals.css';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

// Google Font: Manrope
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

// Metadata
export const metadata = {
  metadataBase: new URL('https://yakoweb.com'),
  title: {
    default: 'YakoWeb | Turn visitors into customers and website overwhelm into a distant memory.',
    template: '%s | YakoWeb'
  },
  description:
    'We design and develop fast, responsive websites that reflect your brand, engage visitors, and get your business sales. Whether you\'re starting from scratch or need a complete redesign.',
  keywords: [
    'web development',
    'web design',
    'custom websites',
    'web applications',
    'digital solutions',
    'YakoWeb'
  ],
  authors: [{ name: 'YakoWeb' }],
  creator: 'YakoWeb',
  publisher: 'YakoWeb',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yakoweb.com',
    siteName: 'YakoWeb',
    title: 'YakoWeb | Modern Web Development Solutions',
    description:
      'Professional web development agency specializing in custom websites, web applications, and digital solutions for businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YakoWeb - Modern Web Development Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YakoWeb | Modern Web Development Solutions',
    description:
      'Professional web development agency specializing in custom websites, web applications, and digital solutions for businesses.',
    images: ['/og-image.jpg'],
    creator: '@YakoWeb'
  }
};

// Root layout for localized routing
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // If invalid locale, show 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} antialiased`}>
        <Script
          defer
          data-website-id="686d163ca0d146cfba8aaa3a"
          data-domain="www.yakoweb.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
