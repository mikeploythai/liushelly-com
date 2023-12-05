import type { Metadata } from "next";
import type { ListItem } from "sanity-studio/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { portfolioSpotlightQuery } from "sanity-studio/queries";
import PortfolioSpotlightLayout from "~/components/portfolio/spotlight/layout";

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

export default async function PortfolioSpotlightPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await sanityFetch<ListItem>({
    query: portfolioSpotlightQuery,
    params: { slug },
    tags: ["portfolio"],
  });

  return <PortfolioSpotlightLayout data={data} />;
}
