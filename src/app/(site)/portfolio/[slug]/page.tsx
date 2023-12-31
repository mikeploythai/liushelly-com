import type { Metadata } from "next";
import type { ListItem } from "~/lib/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { spotlightQuery } from "sanity-studio/queries";
import SpotlightLayout from "~/components/portfolio/spotlight/layout";
import SpotlightLayoutPreview from "~/components/portfolio/spotlight/preview";
import PreviewProvider from "~/components/providers/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

export default async function SpotlightPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data: ListItem = await sanityFetch({
    query: spotlightQuery,
    params: { slug },
    tags: ["portfolio"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_API_READ_TOKEN}>
        <SpotlightLayoutPreview initData={data} initSlug={slug} />
      </PreviewProvider>
    );
  }

  return <SpotlightLayout data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const query = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    name
  }`;

  const page = await client.fetch<{ name: string }>(query, params);
  if (!page) return;

  const title = page.name.toUpperCase();
  const description = `Works by Shelly Liu for ${page.name.toUpperCase()}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Shelly Liu`,
      description,
      url: `${serverEnv.BASE_URL}/portfolio/${params.slug}`,
      type: "article",
    },
  } satisfies Metadata;
}
