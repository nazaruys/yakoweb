/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.yakoweb.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
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
      const routes = ['/', '/privacy', '/terms'];
      const locales = ['', '/en']; // Empty string for Dutch (default at root), /en for English

      // Generate all combinations of routes and locales
      for (const route of routes) {
        for (const locale of locales) {
          // Skip the locale prefix for Dutch (default) routes
          const path = locale ? `${locale}${route}` : route;
          paths.push({
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
            alternateRefs: config.alternateRefs,
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

      // Return object for each path
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      }
    },
  };

export default config;