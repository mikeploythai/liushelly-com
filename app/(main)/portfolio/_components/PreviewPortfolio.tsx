"use client";

import { usePreview } from "@/lib/sanity/preview";
import PortfolioCards from "./PortfolioCards";

export default function PreviewPortfolio({ query }: { query: string }) {
  const data = usePreview(null, query);

  return <PortfolioCards data={data} />;
}
