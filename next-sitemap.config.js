/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.chicagoindianarts.org",
  generateRobotsTxt: true,
  exclude: ["/admin/*", "/api/*", "/privacy-policy", "/terms"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
  },
  transform: async (config, path) => {
    // High priority pages
    const highPriority = ["/", "/vaarta", "/prasang", "/varnam", "/about", "/events"];
    // Medium priority pages
    const mediumPriority = ["/register", "/donate", "/contact", "/gallery", "/team", "/blog"];

    let priority = 0.5;
    let changefreq = "monthly";

    if (highPriority.includes(path)) {
      priority = 1.0;
      changefreq = "weekly";
    } else if (mediumPriority.includes(path)) {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
