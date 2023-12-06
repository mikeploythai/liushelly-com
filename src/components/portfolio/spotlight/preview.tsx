"use client";

import type { ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { spotlightQuery } from "sanity-studio/queries";
import SpotlightLayout from "./layout";

export default function SpotlightLayoutPreview({
  initData = {} as ListItem,
  initSlug = "",
}: {
  initData: ListItem;
  initSlug: string;
}) {
  const [data] = useLiveQuery(initData, spotlightQuery, { slug: initSlug });

  return <SpotlightLayout data={data} />;
}
