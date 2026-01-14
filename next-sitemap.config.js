/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};
