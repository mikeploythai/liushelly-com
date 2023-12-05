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

// About
export const aboutQuery = groq`
*[_type == "aboutMe"][0] {
  ...,
  images[] { ..., 'lqip': asset->metadata.lqip },
}`;

// Services
export const servicesQuery = groq`
{
  "mainService": ${orderableQuery}[0],
  "otherServices": ${orderableQuery}[1..-1],
  "announcement": *[_type == "announcement"][0],
}`;

export const serviceQuery = groq`
*[_type == "services" && slug.current == $slug][0] {
  ...,
  image { ..., 'lqip': asset->metadata.lqip },
  cta { text, 'href': reference->href },
}`;

// Portfolio
export const spotlightQuery = groq`
*[_type == "portfolio" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
  content[] {
    ...,
    ...select(
      _type == "image" => {
        ...,
        'lqip': asset->metadata.lqip
      },
    ),
  },
}`;
