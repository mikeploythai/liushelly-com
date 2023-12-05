"use client";

import type { ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { portfolioItemQuery } from "sanity-studio/queries";
import SpotlightLayout from "./layout";

export default function SpotlightLayoutPreview({
  initItem = {} as ListItem,
  initSlug = "",
}: {
  initItem: ListItem;
  initSlug: string;
}) {
  const [item] = useLiveQuery(initItem, portfolioItemQuery, { slug: initSlug });

  return <SpotlightLayout item={item} />;
}
