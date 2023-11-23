import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://liushelly.com",
      lastModified: new Date(),
    },
    {
      url: "https://liushelly.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://liushelly.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://liushelly.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://liushelly.com/contact",
      lastModified: new Date(),
    },
  ];
}
