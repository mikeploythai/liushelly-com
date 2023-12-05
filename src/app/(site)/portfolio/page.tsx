import type { Metadata } from "next";
import type { ListItem } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { orderableQuery } from "sanity-studio/queries";
import PortfolioLayout from "~/components/portfolio/layout";
import { serverEnv } from "~/env/server.mjs";

const title = "PORTFOLIO";
const description =
  "A showcase of the various brands Shelly Liu has worked with.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Shelly Liu`,
    description,
    url: `${serverEnv.BASE_URL}/portfolio`,
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
