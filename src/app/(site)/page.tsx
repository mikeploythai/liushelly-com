import type { HomeData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { homeQuery } from "sanity-studio/queries";
import HomeLayout from "~/components/home/layout";
import HomeLayoutPreview from "~/components/home/preview";
import PreviewProvider from "~/components/providers/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

export default async function HomePage() {
  const data = await sanityFetch<HomeData>({
    query: homeQuery,
    tags: ["home", "announcement", "services", "testimonials", "links"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <HomeLayoutPreview initData={data} />
      </PreviewProvider>
    );
  }

  return <HomeLayout data={data} />;
}
