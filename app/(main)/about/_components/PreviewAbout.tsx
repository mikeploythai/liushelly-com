"use client";

import { usePreview } from "@/lib/sanity/preview";
import AboutMe from "./AboutMe";

export default function PreviewAbout({ query }: { query: string }) {
  const data = usePreview(null, query);

  return <AboutMe data={data} />;
}
