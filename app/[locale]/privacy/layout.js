export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'en' ? 'Privacy Policy' : 'Privacyverklaring';
  const description = locale === 'en'
    ? 'This Privacy Policy explains how we collect, use, and protect your personal data. This website and our services are operated by YakoWeb. If you have any questions or requests regarding your personal data, you can contact us at hello@yakoweb.com.'
    : 'Deze Privacyverklaring legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen. Deze website en onze diensten worden beheerd door YakoWeb. Als u vragen of verzoeken heeft betreffende uw persoonsgegevens, kunt u contact met ons opnemen via hello@yakoweb.com.';

  return {
    title: `${title} | YakoWeb`,
    description,
    robots: 'index, follow',
    openGraph: {
      title: `${title} | YakoWeb`,
      description,
      url: `https://www.yakoweb.com/${locale === 'en' ? 'en/' : ''}privacy/`,
      type: 'website',
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