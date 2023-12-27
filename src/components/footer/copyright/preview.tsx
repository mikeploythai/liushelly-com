"use client";

import type { SEO } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { seoQuery } from "sanity-studio/queries";
import Copyright from "./copyright";

export default function CopyrightPreview({
  initData = {} as SEO,
  year,
}: {
  initData: SEO;
  year: string;
}) {
  const [data] = useLiveQuery(initData, seoQuery);

  return <Copyright data={data} year={year} />;
}
