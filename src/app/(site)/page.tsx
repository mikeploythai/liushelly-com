import type { SanityDocument } from "sanity";
import type {
  Announcement,
  ListItem,
  SanityImage,
  Testimonial,
} from "~/lib/types";

import { groq } from "next-sanity";
import { LiveQuery } from "next-sanity/preview/live-query";
import { sanityFetch } from "sanity-studio/lib/fetch";
import HomeLayout from "~/components/home/layout";
import PreviewHomeLayout from "~/components/home/preview";
import { isDraftMode } from "~/lib/is-draft-mode";

interface Home extends SanityDocument {
  hero: {
    heading: string;
    cta: {
      text: string;
      href: string;
    };
    image: SanityImage;
  };
  testimonials: Testimonial[];
  featuredInstagramPosts: SanityImage[];
}

type HomeData = {
  home: Home;
  announcement: Announcement;
  services: ListItem[];
  instagram: { href: string };
};

export default async function HomePage() {
  const data = await sanityFetch<HomeData>({
    query,
    tags: ["home", "announcement", "services", "links"],
  });

  return (
    <LiveQuery
      enabled={isDraftMode()}
      query={query}
      initialData={data}
      as={PreviewHomeLayout}
    >
      <HomeLayout data={data} />
    </LiveQuery>
  );
}

const query = groq`
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
