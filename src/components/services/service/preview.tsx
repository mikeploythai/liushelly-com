"use client";

import type { ServiceData } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { serviceQuery } from "sanity-studio/queries";
import ServiceLayouts from "./layout";

export default function ServiceLayoutPreview({
  initData = {} as ServiceData,
  initSlug = "",
}: {
  initData: ServiceData;
  initSlug: string;
}) {
  const [data] = useLiveQuery(initData, serviceQuery, { slug: initSlug });

  return <ServiceLayouts data={data} />;
}
