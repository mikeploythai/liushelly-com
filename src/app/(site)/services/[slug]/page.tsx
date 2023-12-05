import type { Metadata } from "next";
import type { Service } from "~/lib/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { serviceQuery } from "sanity-studio/queries";
import ServiceLayout from "~/components/services/service/layout";
import { serverEnv } from "~/env/server.mjs";

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

  const title = page.name.toUpperCase();
  const description = `${page.name.toUpperCase()} from Shelly Liu, crafted to help your business organically grow its online presence.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Shelly Liu`,
      description,
      url: `${serverEnv.BASE_URL}/services/${params.slug}`,
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
