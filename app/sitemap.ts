// adapted from https://github.com/elie222/inbox-zero/blob/main/apps/web/app/sitemap.ts - thank you!

import type { MetadataRoute } from "next";
import { unstable_noStore } from "next/cache";
import { sanityFetch } from "../sanity/lib/fetch";
import { projectSlugsQuery } from "../sanity/lib/queries";

async function getProjects() {
  const projects = await sanityFetch<{ slug: string; date: string }[]>({
    query: projectSlugsQuery,
  });
  return projects.map((project) => ({
    url: `https://emmygardner.online/projects/${project.slug}`,
    lastModified: new Date(project.date),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // to try fix caching issue: https://github.com/vercel/next.js/discussions/56708#discussioncomment-10127496
  unstable_noStore();

  const projects = await getProjects();

  const staticUrls = [
    {
      url: "https://emmygardner.online/",
      priority: 1,
    },
    {
        url: "https://churething.com/projects",
    }
  ];

  return [...staticUrls, ...projects];
}