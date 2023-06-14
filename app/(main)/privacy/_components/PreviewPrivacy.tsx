"use client";

import { usePreview } from "@/lib/sanity/preview";
import Policy from "./Policy";

export default function PreviewPrivacy({ query }: { query: string }) {
  const data = usePreview(null, query);

  return <Policy data={data} />;
}
