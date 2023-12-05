import type { ListItem } from "~/lib/types";

import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import BlockContent from "~/components/block-content";
import PageWrapper from "~/components/page-wrapper";
import MarkdownProvider from "~/components/providers/markdown";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/cn";

export default function SpotlightLayout({ item }: { item: ListItem }) {
  if (!item) return;

  return (
    <PageWrapper className="mx-auto max-w-screen-md space-y-6 p-6 md:p-12">
      <Link
        href="/portfolio"
        className={cn(buttonVariants({ variant: "link", size: "sm" }), "p-0")}
      >
        <IconChevronLeft size={12} />
        Back to portfolio
      </Link>

      <MarkdownProvider>
        <article className="w-full">
          <BlockContent content={item.content} />
        </article>
      </MarkdownProvider>
    </PageWrapper>
  );
}
