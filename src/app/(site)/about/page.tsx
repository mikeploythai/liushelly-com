import type { Metadata } from "next";
import type { AboutData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { aboutQuery } from "sanity-studio/queries";
import AboutLayout from "~/components/about/layout";
import { serverEnv } from "~/env/server.mjs";

const title = "ABOUT";
const description =
  "Shelly Liu is a freelance social media manager, strategist, and content writer based in Southern California.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Shelly Liu`,
    description,
    url: `${serverEnv.BASE_URL}/about`,
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
