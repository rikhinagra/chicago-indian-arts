/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.chicagoindianarts.org",
  generateRobotsTxt: true,
  // "/literature-festival/2027" is hidden on purpose until the client approves the page.
  // Remove it from this list when LIT_FEST_2027_LIVE is switched on (src/lib/featureFlags.ts).
  exclude: ["/admin/*", "/api/*", "/privacy-policy", "/terms", "/literature-festival/2027"],
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
    const highPriority = ["/", "/literature-festival", "/fashion-week", "/photography-festival", "/about", "/events"];
    // Medium priority pages
    const mediumPriority = ["/register", "/donate", "/contact", "/gallery", "/team", "/blog", "/call-for-submissions"];

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
