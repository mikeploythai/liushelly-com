"use client";

import type { About } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { aboutQuery } from "sanity-studio/queries";
import AboutLayout from "./layout";

export default function AboutLayoutPreview({
  initAbout = {} as About,
}: {
  initAbout: About;
}) {
  const [about] = useLiveQuery(initAbout, aboutQuery);

  return <AboutLayout about={about} />;
}
