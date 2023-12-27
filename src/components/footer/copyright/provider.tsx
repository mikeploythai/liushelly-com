import type { SEO } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { seoQuery } from "sanity-studio/queries";
import PreviewProvider from "~/components/providers/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";
import Copyright from "./copyright";
import CopyrightPreview from "./preview";

export default async function CopyrightProvider() {
  const year = await fetch(`${serverEnv.BASE_URL}/api/get-year`, {
    next: { tags: ["year"] },
  }).then(async (res) => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") return "YEAR";
    else return await res.text();
  });

  const data = await sanityFetch<SEO>({ query: seoQuery, tags: ["seo"] });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <CopyrightPreview initData={data} year={year} />
      </PreviewProvider>
    );
  }

  return <Copyright data={data} year={year} />;
}
