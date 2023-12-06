"use client";

import type { ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { orderableQuery } from "sanity-studio/queries";
import PortfolioLayout from "./layout";

export default function PortfolioLayoutPreview({
  initData = [] as ListItem[],
}: {
  initData: ListItem[];
}) {
  const [data] = useLiveQuery(initData, orderableQuery, {
    type: "portfolio",
  });

  return <PortfolioLayout data={data} />;
}
