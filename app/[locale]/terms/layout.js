export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'en' ? 'Terms and Conditions' : 'Algemene Voorwaarden';
  const description = locale === 'en'
    ? 'We provide web development and digital solutions services, including but not limited to website development, web application development, and related consulting services. The specific details of services will be outlined in individual service agreements or proposals.'
    : 'Wij bieden webontwikkeling en digitale oplossingen diensten aan, waaronder maar niet beperkt tot website ontwikkeling, webapplicatie ontwikkeling en gerelateerde adviesservices. De specifieke details van diensten worden uiteengezet in individuele serviceovereenkomsten of offertes.';

  const canonicalUrl = `https://www.yakoweb.com${locale === 'en' ? '/en' : ''}/terms`;

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
        'nl': 'https://www.yakoweb.com/terms',
        'en': 'https://www.yakoweb.com/en/terms',
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

export default function TermsLayout({ children }) {
  return children;
} 