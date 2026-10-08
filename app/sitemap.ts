import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/contact"].map((path) => ({
    url: `${profile.siteUrl}${path}`,
  }));
}
