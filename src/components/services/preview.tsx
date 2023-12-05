"use client";

import type { Announcement, ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { announcementQuery, orderableQuery } from "sanity-studio/queries";
import ServicesLayout from "./layout";

export default function ServicesLayoutPreview({
  initServices = [] as ListItem[],
  initAnnouncement = {} as Announcement,
}: {
  initServices: ListItem[];
  initAnnouncement: Announcement;
}) {
  const [services] = useLiveQuery(initServices, orderableQuery, {
    type: "services",
  });
  const [announcement] = useLiveQuery(initAnnouncement, announcementQuery);

  return <ServicesLayout services={services} announcement={announcement} />;
}
