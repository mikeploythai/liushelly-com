import type { ListItem } from "sanity-studio/types";

import { client } from "sanity-studio/lib/client";
import { orderableQuery } from "sanity-studio/queries";
import CardGrid from "../_components/card-grid";
import PageWrapper from "../_components/page-wrapper";

export default async function PortfolioPage() {
  const portfolio: ListItem[] = await client.fetch(orderableQuery, {
    type: "portfolio",
    next: { tags: ["portfolio"] },
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
