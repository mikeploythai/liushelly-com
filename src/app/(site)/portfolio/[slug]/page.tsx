import type { Metadata } from "next";
import type { ListItem } from "sanity-studio/types";

import { IconChevronLeft } from "@tabler/icons-react";
import { groq } from "next-sanity";
import Link from "next/link";
import { client } from "sanity-studio/lib/client";
import { sanityFetch } from "sanity-studio/lib/fetch";
import ContentBlock from "~/components/content-block";
import MarkdownWrapper from "~/components/markdown-wrapper";
import PageWrapper from "~/components/page-wrapper";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";

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

export default async function BrandPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const brand: ListItem = await sanityFetch({
    query,
    params: { slug },
    tags: ["portfolio"],
  });

  if (!brand) return;

  return (
    <PageWrapper className="mx-auto max-w-screen-md space-y-6 p-6 md:p-12">
      <Link
        href="/portfolio"
        className={cn(buttonVariants({ variant: "link", size: "sm" }), "p-0")}
      >
        <IconChevronLeft size={12} />
        Back to portfolio
      </Link>

      <MarkdownWrapper>
        <article className="w-full">
          <ContentBlock content={brand.content} />
        </article>
      </MarkdownWrapper>
    </PageWrapper>
  );
}

const query = groq`
*[_type == "portfolio" && slug.current == $slug][0] {
  ...,
  image {
    ...,
    'lqip': asset->metadata.lqip,
  },
  content[] {
    ...,
    ...select(
      _type == "image" => {
        ...,
        'lqip': asset->metadata.lqip
      }
    )
  }
}`;
