import type { ListItem } from "sanity-studio/types";

import { PortableText } from "@portabletext/react";
import { IconChevronLeft } from "@tabler/icons-react";
import { groq } from "next-sanity";
import Link from "next/link";
import { client } from "sanity-studio/lib/client";
import { BlockImage, BlockLink } from "sanity-studio/portable-text/components";
import { cn } from "~/lib/cn";
import MarkdownWrapper from "../../_components/markdown-wrapper";
import PageWrapper from "../../_components/page-wrapper";
import { buttonVariants } from "../../_components/ui/button";

export default async function BrandPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const brand: ListItem = await client.fetch(query, {
    slug,
    next: {
      cache: "no-store",
    },
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
        <article>
          <PortableText
            value={brand.content}
            components={{
              types: { image: BlockImage },
              marks: { link: BlockLink },
            }}
          />
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
