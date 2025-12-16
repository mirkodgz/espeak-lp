import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Prefer explicit env for correct canonical URLs in production.
  const envUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (envUrl) {
    const base = new URL(envUrl).origin;
    return [
      { url: `${base}/`, lastModified: new Date() },
      { url: `${base}/support`, lastModified: new Date() },
      { url: `${base}/privacy-policy`, lastModified: new Date() },
      { url: `${base}/terms-and-conditions`, lastModified: new Date() },
    ];
  }

  // Fallback: infer from request host (useful on preview/local).
  const headersList = await headers();
  const domain = headersList.get("host") || "localhost:3000";
  const protocol = domain.includes("localhost") ? "http" : "https";
  const base = `${protocol}://${domain}`;

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/support`,
      lastModified: new Date(),
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${base}/terms-and-conditions`,
      lastModified: new Date(),
    },
  ];
}
