"use client";

import type { AboutData } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { aboutQuery } from "sanity-studio/queries";
import AboutLayout from "./layout";

export default function AboutLayoutPreview({
  initData = {} as AboutData,
}: {
  initData: AboutData;
}) {
  const [data] = useLiveQuery(initData, aboutQuery);

  return <AboutLayout data={data} />;
}
