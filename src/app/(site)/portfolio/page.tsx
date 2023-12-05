import type { Metadata } from "next";
import type { ListItem } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { orderableQuery } from "sanity-studio/queries";
import PortfolioLayout from "~/components/portfolio/layout";

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "A showcase of the various brands Shelly Liu has worked with.",
  openGraph: {
    title: "PORTFOLIO | Shelly Liu",
    description: "A showcase of the various brands Shelly Liu has worked with.",
    url: "https://liushelly.com/portfolio",
    type: "website",
  },
};

export default async function PortfolioPage() {
  const data = await sanityFetch<ListItem[]>({
    query: orderableQuery,
    params: { type: "portfolio" },
    tags: ["portfolio"],
  });

  return <PortfolioLayout data={data} />;
}
