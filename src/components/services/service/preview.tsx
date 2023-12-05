"use client";

import type { Service } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { serviceQuery } from "sanity-studio/queries";
import ServiceLayouts from "./layout";

export default function ServiceLayoutPreview({
  initService = {} as Service,
  initSlug = "",
}: {
  initService: Service;
  initSlug: string;
}) {
  const [service] = useLiveQuery(initService, serviceQuery, { slug: initSlug });

  return <ServiceLayouts service={service} />;
}
