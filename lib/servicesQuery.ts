import { groq } from "next-sanity";

export const servicesQuery = groq`
  *[_type == "services"] | order(orderRank) {
    name,
    description,
    button,
    img {
      asset -> {
        url,
        metadata
      }
    },
    packages,
    contents
  }
`;
