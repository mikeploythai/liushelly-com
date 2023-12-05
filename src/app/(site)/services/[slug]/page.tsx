import type { Metadata } from "next";
import type { Service } from "~/lib/types";

import { groq } from "next-sanity";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import { serviceQuery } from "sanity-studio/queries";
import PreviewProvider from "~/components/providers/preview";
import ServiceLayouts from "~/components/services/service/layout";
import ServicePreview from "~/components/services/service/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const service = await sanityFetch<Service>({
    query: serviceQuery,
    params: { slug },
    tags: ["services"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <ServicePreview initService={service} initSlug={slug} />
      </PreviewProvider>
    );
  }

  return <ServiceLayouts service={service} />;
}

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
