"use client";

import type { SocialLink } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { socialLinksQuery } from "sanity-studio/queries";
import SocialLinks from "./links";

export default function SocialLinksPreview({
  initLinks = [],
}: {
  initLinks: SocialLink[];
}) {
  const [socialLinks] = useLiveQuery(initLinks, socialLinksQuery);

  return <SocialLinks socialLinks={socialLinks} />;
}
