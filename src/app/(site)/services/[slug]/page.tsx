import type { Metadata } from "next";
import type { Service } from "sanity-studio/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { serviceQuery } from "sanity-studio/queries";
import ServiceLayout from "~/components/services/service/layout";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const query = groq`
  *[_type == "services" && slug.current == $slug][0] {
    name
  }`;

  const page = await client.fetch<{ name: string }>(query, params);
  if (!page) return;

  return {
    title: page.name.toUpperCase(),
    description: `${page.name.toUpperCase()} from Shelly Liu, crafted to help your business organically grow its online presence.`,
    openGraph: {
      title: `${page.name.toUpperCase()} | Shelly Liu`,
      description: `${page.name.toUpperCase()} from Shelly Liu, crafted to help your business organically grow its online presence.`,
      url: `https://liushelly.com/services/${params.slug}`,
      type: "article",
    },
  } satisfies Metadata;
}

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await sanityFetch<Service>({
    query: serviceQuery,
    params: { slug },
    tags: ["services"],
  });

  return <ServiceLayout data={data} />;
}
