import { groq } from "next-sanity";

export const heroQuery = groq`
*[_type=="hero" && page=="home"][0] {
  ...,
  image {
    ...,
    'blur': asset->metadata.lqip,
  }
}
`;
export const marqueeQuery = groq`*[_type=="marquee"] | order(orderRank)`;
export const testimonialQuery = groq`*[_type=="testimonial"] | order(orderRank)`;
export const instagramQuery = groq`
*[_type=="instagramCard"] | order(orderRank) {
  ...,
  image {
    ...,
    'blur': asset->metadata.lqip,
  }
}
`;
