import type { MetadataRoute } from "next";
import { PROGRAM_LIST } from "@/lib/programs";

const SITE_URL = "https://www.abacify.com";

const STATIC_ROUTES = ["", "/programs", "/enquire", "/about", "/contact", "/privacy", "/terms", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const programEntries: MetadataRoute.Sitemap = PROGRAM_LIST.map((program) => ({
    url: `${SITE_URL}${program.href}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticEntries, ...programEntries];
}
