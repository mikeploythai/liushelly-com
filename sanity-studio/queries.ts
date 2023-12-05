import { groq } from "next-sanity";

// Shared
export const orderableQuery = groq`
*[_type == $type] | order(orderRank) {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;

// Fetches
export const homeQuery = groq`
{
  "home": *[_type == "home"][0] {
    ...,
    hero {
      ...,
      image { ..., 'lqip': asset->metadata.lqip },
      cta { text, 'href': reference->href },
    },
    featuredInstagramPosts[] {
      ...,
      'lqip': asset->metadata.lqip
    },
  },
  "announcement": *[_type == "announcement"][0],
  "services": *[_type == "services"] | order(orderRank) [0..2] {
    ...,
    image { ..., 'lqip': asset->metadata.lqip },
  },
  "instagram": *[_type == "links" && name == "Instagram"][0],
}`;
