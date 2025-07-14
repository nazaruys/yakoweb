'use client';

import Script from 'next/script';
import { useParams } from 'next/navigation';

export function LayoutShell({ children }) {
  const params = useParams();
  const locale = params?.locale || 'nl';
  const isEnglish = locale === 'en';

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.yakoweb.com/#organization',
                'name': 'YakoWeb',
                'url': 'https://www.yakoweb.com',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://www.yakoweb.com/logos/YakoWeb.svg',
                  'width': 130,
                  'height': 40
                },
                'sameAs': [
                  'https://x.com/nazar_yakov',
                  // Add other social media URLs when available
                ],
                'contactPoint': {
                  '@type': 'ContactPoint',
                  'email': 'hello@yakoweb.com',
                  'contactType': 'customer service',
                  'availableLanguage': ['nl', 'en']
                }
              },
              {
                '@type': 'WebSite',
                '@id': 'https://www.yakoweb.com/#website',
                'url': 'https://www.yakoweb.com',
                'name': 'YakoWeb',
                'publisher': { '@id': 'https://www.yakoweb.com/#organization' },
                'inLanguage': 'nl',
                'alternateName': 'YakoWeb Webontwikkeling',
                'potentialAction': {
                  '@type': 'ReadAction',
                  'target': [
                    {
                      '@type': 'EntryPoint',
                      'urlTemplate': 'https://www.yakoweb.com{?}',
                      'inLanguage': 'nl'
                    },
                    {
                      '@type': 'EntryPoint',
                      'urlTemplate': 'https://www.yakoweb.com/en{?}',
                      'inLanguage': 'en'
                    }
                  ]
                }
              },
              {
                '@type': 'Service',
                '@id': `https://www.yakoweb.com/#service-${locale}`,
                'name': isEnglish 
                  ? 'Web Development and Design Services'
                  : 'Webontwikkeling en Design Diensten',
                'provider': { '@id': 'https://www.yakoweb.com/#organization' },
                'description': isEnglish
                  ? 'We design and develop fast, responsive websites that reflect your brand, engage visitors, and drive more sales.'
                  : 'Wij ontwerpen en ontwikkelen snelle, responsieve websites die jouw merk weerspiegelen, bezoekers betrekken en zorgen voor meer verkoop.',
                'areaServed': {
                  '@type': 'Country',
                  'name': 'Netherlands'
                },
                'inLanguage': locale,
                'hasOfferCatalog': {
                  '@type': 'OfferCatalog',
                  'name': isEnglish ? 'Web Development Services' : 'Webontwikkeling Diensten',
                  'itemListElement': [
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': isEnglish ? 'Website Development' : 'Website Ontwikkeling'
                      }
                    },
                    {
                      '@type': 'Offer',
                      'itemOffered': {
                        '@type': 'Service',
                        'name': isEnglish ? 'Website Design' : 'Website Ontwerp'
                      }
                    }
                  ]
                }
              }
            ]
          })
        }}
      />
      <main>{children}</main>
    </>
  );
}
