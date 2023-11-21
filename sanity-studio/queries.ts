import { groq } from "next-sanity";

export const orderableQuery = groq`
*[_type == $type] | order(orderRank) {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
}`;
