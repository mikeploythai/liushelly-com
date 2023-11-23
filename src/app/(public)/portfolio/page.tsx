import type { ListItem } from "sanity-studio/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { orderableQuery } from "sanity-studio/queries";
import CardGrid from "~/components/card-grid";
import PageWrapper from "~/components/page-wrapper";

export default async function PortfolioPage() {
  const portfolio = await sanityFetch<ListItem[]>({
    query: orderableQuery,
    params: { type: "portfolio" },
    tags: ["portfolio"],
  });

  if (!portfolio) return;

  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-6 p-6">
      <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
        Brands I&apos;ve worked with!
      </h1>

      <CardGrid list={portfolio} className="w-full md:grid-cols-3" />
    </PageWrapper>
  );
}
