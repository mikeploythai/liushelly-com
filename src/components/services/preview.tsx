"use client";

import type { ServicesData } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { servicesQuery } from "sanity-studio/queries";
import ServicesLayout from "./layout";

export default function ServicesLayoutPreview({
  initData = {} as ServicesData,
}: {
  initData: ServicesData;
}) {
  const [data] = useLiveQuery(initData, servicesQuery, {
    type: "services",
  });

  return <ServicesLayout data={data} />;
}
