"use client";

import type { ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { orderableQuery } from "sanity-studio/queries";
import PortfolioLayout from "./layout";

export default function PortfolioLayoutPreview({
  initPortfolio = [] as ListItem[],
}: {
  initPortfolio: ListItem[];
}) {
  const [portfolio] = useLiveQuery(initPortfolio, orderableQuery, {
    type: "portfolio",
  });

  return <PortfolioLayout portfolio={portfolio} />;
}
