"use client";

import { usePreview } from "@/lib/sanity/preview";
import BrandShowcase from "./BrandShowcase";

type PreviewBrandProps = {
  query: string;
  slug: string;
};

export default function PreviewBrand({ query, slug }: PreviewBrandProps) {
  const data = usePreview(null, query, { slug });

  return <BrandShowcase data={data} />;
}
