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
  };

export default config;