import { MetadataRoute } from "next";

const locales = ["en", "uk", "pl"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.BASE_URL!;

  const routes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  }));

  return routes;
}