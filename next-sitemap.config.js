/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.yakoweb.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    // Default values - will be overridden for specific pages
    changefreq: 'monthly',
    priority: 0.5,
    exclude: [
      '/api/*',           // Exclude API routes
      '/_next/*',         // Exclude Next.js internals
    ],
    // Dutch-only website configuration
    alternateRefs: [
      {
        href: 'https://www.yakoweb.com',
        hreflang: 'nl',
      },
      {
        href: 'https://www.yakoweb.com',
        hreflang: 'x-default',
      },
    ],
    // Add additional properties to ensure routes are included
    additionalPaths: async (config) => {
      const paths = [];
      const routes = [
        { path: '/', priority: 1.0, changefreq: 'weekly' },
        { path: '/privacyverklaring', priority: 0.3, changefreq: 'monthly' },
        { path: '/algemene-voorwaarden', priority: 0.3, changefreq: 'monthly' }
      ];

      // Generate paths for Dutch-only website
      for (const route of routes) {
        paths.push({
          loc: route.path,
          changefreq: route.changefreq || config.changefreq,
          priority: route.priority || config.priority,
          lastmod: new Date().toISOString(),
          alternateRefs: config.alternateRefs,

        });
      }

      return paths;
    },
    transform: async (config, path) => {
      // Skip excluded paths
      if (config.exclude.some(pattern => {
        if (pattern.includes('*')) {
          const regex = new RegExp(pattern.replace(/\*/g, '.*'));
          return regex.test(path);
        }
        return path === pattern;
      })) {
        return null;
      }

      // Set custom priorities and change frequencies for specific pages
      let priority = config.priority;
      let changefreq = config.changefreq;

      if (path === '/') {
        priority = 1.0;
        changefreq = 'weekly';
      } else if (path.includes('/privacyverklaring') || path.includes('/algemene-voorwaarden')) {
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

      }
    },
  };

export default config;