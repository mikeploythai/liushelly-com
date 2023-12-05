import type { Metadata } from "next";
import type { ListItem } from "sanity-studio/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { spotlightQuery } from "sanity-studio/queries";
import SpotlightLayout from "~/components/portfolio/spotlight/layout";

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

  return {
    title: page.name.toUpperCase(),
    description: `Works by Shelly Liu for ${page.name.toUpperCase()}.`,
    openGraph: {
      title: `${page.name.toUpperCase()} | Shelly Liu`,
      description: `Works by Shelly Liu for ${page.name.toUpperCase()}.`,
      url: `https://liushelly.com/portfolio/${params.slug}`,
      type: "article",
    },
  } satisfies Metadata;
}

export default async function SpotlightPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await sanityFetch<ListItem>({
    query: spotlightQuery,
    params: { slug },
    tags: ["portfolio"],
  });

  return <SpotlightLayout data={data} />;
}
