import type { Metadata } from "next";
import type { About } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { aboutQuery } from "sanity-studio/queries";
import AboutLayout from "~/components/about/layout";
import AboutLayoutPreview from "~/components/about/preview";
import PreviewProvider from "~/components/providers/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

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
  const about = await sanityFetch<About>({
    query: aboutQuery,
    tags: ["aboutMe"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <AboutLayoutPreview initAbout={about} />
      </PreviewProvider>
    );
  }

  return <AboutLayout about={about} />;
}
