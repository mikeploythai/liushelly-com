import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${process.env.VERCEL_URL}`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `https://${process.env.VERCEL_URL}/contact`,
      lastModified: new Date(),
    },
  ];
}
