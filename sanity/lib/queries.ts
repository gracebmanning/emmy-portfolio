import { groq } from "next-sanity";

// Get all projects
export const allProjectsQuery = groq`*[_type == "post"] {
    _id,
    _createdAt,
    title,
    slug,
    thumbnailFileName,
    thumbnailAlt,
    year,
    tags
}`;

// Get a single project by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{ 
    _id,
    _createdAt,
    title,
    slug,
    thumbnailFileName,
    thumbnailAlt,
    year,
    tags,
    imageBucketName,
    imageFileName,
    numImages,
    body
  }`;

// get all project slugs
export const projectPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// get all slugs with latest updated date for sitemap
export const projectSlugsQuery = groq`*[_type == "project"] {
    "slug": slug.current,
    "date": _updatedAt
  }`;
