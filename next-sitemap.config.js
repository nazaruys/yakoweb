/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.yakoweb.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    // Default values - will be overridden for specific pages
    changefreq: 'monthly',
    priority: 0.5,
    exclude: [
      '/landing-thank-you',
      '/standard-thank-you',
      '/en/landing-thank-you',
      '/en/standard-thank-you'
    ],
    // Handle i18n with Dutch as default (root) and English with /en prefix
    alternateRefs: [
      {
        href: 'https://www.yakoweb.com',
        hreflang: 'nl',
      },
      {
        href: 'https://www.yakoweb.com/en',
        hreflang: 'en',
      },
    ],
    // Add additional properties to ensure routes are included
    additionalPaths: async (config) => {
      const paths = [];
      const routes = [
        { path: '/', priority: 1.0, changefreq: 'weekly' },
        { path: '/privacy', priority: 0.3, changefreq: 'monthly' },
        { path: '/terms', priority: 0.3, changefreq: 'monthly' }
      ];
      const locales = ['', '/en']; // Empty string for Dutch (default at root), /en for English

      // Generate all combinations of routes and locales
      for (const route of routes) {
        for (const locale of locales) {
          // Skip the locale prefix for Dutch (default) routes
          const path = locale ? `${locale}${route.path}` : route.path;
          paths.push({
            loc: path,
            changefreq: route.changefreq || config.changefreq,
            priority: route.priority || config.priority,
            lastmod: new Date().toISOString(),
            alternateRefs: config.alternateRefs,
            // Add image sitemap entries for pages that have images
            ...(route.path === '/' && {
              images: [
                {
                  loc: 'https://www.yakoweb.com/images/hero.webp',
                  title: 'YakoWeb Hero Image',
                  caption: 'YakoWeb Web Development and Design Services',
                },
                {
                  loc: 'https://www.yakoweb.com/logos/YakoWeb.svg',
                  title: 'YakoWeb Logo',
                  caption: 'YakoWeb Company Logo',
                }
              ]
            })
          });
        }
      }

      return paths;
    },
    transform: async (config, path) => {
      // Skip excluded paths
      if (config.exclude.includes(path)) {
        return null;
      }

      // Set custom priorities and change frequencies for specific pages
      let priority = config.priority;
      let changefreq = config.changefreq;

      if (path === '/' || path === '/en') {
        priority = 1.0;
        changefreq = 'weekly';
      } else if (path.includes('/privacy') || path.includes('/terms')) {
        priority = 0.3;
        changefreq = 'monthly';
      }

      // Return object for each path
      return {
        loc: path,
        changefreq,
        priority,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
        // Add image sitemap entries for the homepage
        ...(path === '/' && {
          images: [
            {
              loc: 'https://www.yakoweb.com/images/hero.webp',
              title: 'YakoWeb Hero Image',
              caption: 'YakoWeb Web Development and Design Services',
            },
            {
              loc: 'https://www.yakoweb.com/logos/YakoWeb.svg',
              title: 'YakoWeb Logo',
              caption: 'YakoWeb Company Logo',
            }
          ]
        })
      }
    },
  };

export default config;