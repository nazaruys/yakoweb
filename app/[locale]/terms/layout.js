export async function generateMetadata({ params: { locale } }) {
  const title = locale === 'en' ? 'Terms and Conditions' : 'Algemene Voorwaarden';
  const description = locale === 'en'
    ? 'We provide web development and digital solutions services, including but not limited to website development, web application development, and related consulting services. The specific details of services will be outlined in individual service agreements or proposals.'
    : 'Wij bieden webontwikkeling en digitale oplossingen diensten aan, waaronder maar niet beperkt tot website ontwikkeling, webapplicatie ontwikkeling en gerelateerde adviesservices. De specifieke details van diensten worden uiteengezet in individuele serviceovereenkomsten of offertes.';

  return {
    title: `${title} | YakoWeb`,
    description,
    robots: 'index, follow',
    openGraph: {
      title: `${title} | YakoWeb`,
      description,
      url: `https://www.yakoweb.com/${locale === 'en' ? 'en/' : ''}terms/`,
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

export default function TermsLayout({ children }) {
  return children;
} 