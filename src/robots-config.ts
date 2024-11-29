export const robotsTxtConfig = {
  policy: [
    // Ignore GPTBot
    {
      userAgent: "GPTBot",
      disallow: "/",
    },
  ],
  sitemap: false,
};
