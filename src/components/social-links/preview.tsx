"use client";

import type { SocialLink } from "~/lib/types";
import type { ButtonProps } from "../ui/button";

import { useLiveQuery } from "next-sanity/preview";
import { socialLinksQuery } from "sanity-studio/queries";
import SocialLinks from "./links";

export default function SocialLinksPreview({
  initData = [],
  buttonProps,
  withLabel,
}: {
  initData: SocialLink[];
  buttonProps?: ButtonProps;
  withLabel?: boolean;
}) {
  const [data] = useLiveQuery(initData, socialLinksQuery);

  return (
    <SocialLinks data={data} buttonProps={buttonProps} withLabel={withLabel} />
  );
}
