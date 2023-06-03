import { groq } from "next-sanity";

const serviceQuery = groq`
  *[_type=="service"] | order(orderRank) {
    ...,
    image {
      ...,
      'blur': asset->metadata.lqip,
    }
  }
`;

export default serviceQuery;
