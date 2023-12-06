import type { SocialLink } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { socialLinksQuery } from "sanity-studio/queries";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";
import PreviewProvider from "../providers/preview";
import SocialLinks from "./links";
import SocialLinksPreview from "./preview";

export default async function SocialLinksProvider() {
  const data = await sanityFetch<SocialLink[]>({
    query: socialLinksQuery,
    tags: ["socials"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <SocialLinksPreview initData={data} />
      </PreviewProvider>
    );
  }

  return <SocialLinks data={data} />;
}
