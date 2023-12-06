"use client";

import type { SocialLink } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { socialLinksQuery } from "sanity-studio/queries";
import SocialLinks from "./links";

export default function SocialLinksPreview({
  initData = [],
}: {
  initData: SocialLink[];
}) {
  const [data] = useLiveQuery(initData, socialLinksQuery);

  return <SocialLinks data={data} />;
}
