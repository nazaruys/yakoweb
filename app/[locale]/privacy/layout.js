export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'en' ? 'Privacy Policy' : 'Privacyverklaring';
  const description = locale === 'en'
    ? 'This Privacy Policy explains how we collect, use, and protect your personal data. This website and our services are operated by YakoWeb. If you have any questions or requests regarding your personal data, you can contact us at hello@yakoweb.com.'
    : 'Deze Privacyverklaring legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen. Deze website en onze diensten worden beheerd door YakoWeb. Als u vragen of verzoeken heeft betreffende uw persoonsgegevens, kunt u contact met ons opnemen via hello@yakoweb.com.';

  const canonicalUrl = `https://www.yakoweb.com${locale === 'en' ? '/en' : ''}/privacy`;

  return {
    title: `${title} | YakoWeb`,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'nl': 'https://www.yakoweb.com/privacy',
        'en': 'https://www.yakoweb.com/en/privacy',
      },
    },
    openGraph: {
      title: `${title} | YakoWeb`,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'nl_NL',
    },
    twitter: {
      card: 'summary',
      title: `${title} | YakoWeb`,
      description,
      site: '@nazar_yakov',
    },
  };
}

export default function PrivacyLayout({ children }) {
  return children;
} 