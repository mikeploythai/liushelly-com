"use client";

import type { SocialLink } from "~/lib/types";
import type { ButtonProps } from "../ui/button";

import { useLiveQuery } from "next-sanity/preview";
import { socialLinksQuery } from "sanity-studio/queries";
import SocialLinks from "./links";

export default function SocialLinksPreview({
  initData = [],
  buttonProps,
}: {
  initData: SocialLink[];
  buttonProps: ButtonProps;
}) {
  const [data] = useLiveQuery(initData, socialLinksQuery);

  return <SocialLinks data={data} buttonProps={buttonProps} />;
}
