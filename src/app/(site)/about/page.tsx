import type { Metadata } from "next";
import type { AboutData } from "sanity-studio/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { aboutQuery } from "sanity-studio/queries";
import AboutLayout from "~/components/about/layout";

export const metadata: Metadata = {
  title: "ABOUT",
  description:
    "Shelly Liu is a freelance social media manager, strategist, and content writer based in Southern California.",
  openGraph: {
    title: "ABOUT | Shelly Liu",
    description:
      "Shelly Liu is a freelance social media manager, strategist, and content writer based in Southern California.",
    url: "https://liushelly.com/about",
    type: "website",
  },
};

export default async function AboutPage() {
  const data = await sanityFetch<AboutData>({
    query: aboutQuery,
    tags: ["aboutMe"],
  });

  return <AboutLayout data={data} />;
}
