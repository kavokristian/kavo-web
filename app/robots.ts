import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/kunde-oppstart", "/kunde-oppstart/"],
    },
    sitemap: "https://www.kavo.no/sitemap.xml",
  };
}
