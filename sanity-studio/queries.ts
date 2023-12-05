import { groq } from "next-sanity";

export const orderableQuery = groq`
*[_type == $type] | order(orderRank) {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;

// Components
export const announcementQuery = groq`
*[_type == "announcement"][0]`;

export const socialLinksQuery = groq`
*[_type == "socials"] | order(orderRank) {
  ...,
  'href': reference->href
}`;

// Home
export const homeQuery = groq`
*[_type == "home"][0] {
  ...,
  hero {
    ...,
    image {
      ...,
      'lqip': asset->metadata.lqip,
    },
    cta {
      text,
      'href': reference->href
    },
  },
  featuredInstagramPosts[] {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;

export const slicedServicesQuery = groq`
*[_type == $type] | order(orderRank) [0..2] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;

export const instagramLinkQuery = groq`
*[_type == "links" && name == "Instagram"][0]`;

export const aboutQuery = groq`
*[_type == "aboutMe"][0] {
  ...,
  images[] {
    ...,
    'lqip': asset->metadata.lqip,
  }
}`;

export const serviceQuery = groq`
*[_type == "services" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
  cta {
    text,
    'href': reference->href
  },
}`;

// Portfolio
export const portfolioItemQuery = groq`
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
      }
    )
  }
}`;
