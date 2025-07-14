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
    // Transform function to handle default locale at root
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
        // Add alternate language versions
        alternateRefs: config.alternateRefs ?? [],
      }
    },
  };

export default config;