import type { ListItem } from "~/lib/types";

import CardGrid from "../card-grid";
import PageWrapper from "../page-wrapper";

export default function PortfolioLayout({ data }: { data: ListItem[] }) {
  if (!data) return;

  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center gap-6 p-6">
      <h1 className="font-heading text-3xl font-medium md:py-6 md:text-center md:text-4xl">
        Brands I&apos;ve worked with!
      </h1>

      <CardGrid list={data} className="w-full md:grid-cols-3" />
    </PageWrapper>
  );
}
