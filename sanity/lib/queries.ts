import { groq } from "next-sanity";

// get all slugs with latest updated date for sitemap
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
    bio,
    resume {
      asset->{
        url
      }
    }
  }`;


// title, slug, thumbnail, thumbnailAlt, month, year, 
// company, companyLink (make <a> if link is not empty),
// role, roleDescription, projectDescription,
// moreInfoLink, embed (<video> or <a> or <object>)

// Get all projects
export const allProjectsQuery = groq`*[_type == "project"] {
    _id,
    title,
    "slug": slug.current,
    thumbnail,
    thumbnailAlt,
    month,
    year,
    company,
    role
}`;

// Get a single project by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{ 
    _id,
    title,
    "slug": slug.current,
    thumbnail,
    thumbnailAlt,
    month,
    year,
    company,
    companyLink,
    role, 
    roleDescription, 
    projectDescription,
    moreInfoLink,
    mediaSource,
    videoFile {
      asset->{
        url
      }
    },
    videoLink
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
