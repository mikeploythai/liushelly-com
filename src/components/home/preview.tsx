"use client";

import type { Announcement, Home, ListItem } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import {
  announcementQuery,
  homeQuery,
  instagramLinkQuery,
  slicedServicesQuery,
} from "sanity-studio/queries";
import HomeLayout from "./layout";

export default function HomeLayoutPreview({
  initHome = {} as Home,
  initAnnouncement = {} as Announcement,
  initServices = [],
  initInstagramLink = {} as { href: string },
}: {
  initHome: Home;
  initAnnouncement: Announcement;
  initServices: ListItem[];
  initInstagramLink: { href: string };
}) {
  const [home] = useLiveQuery(initHome, homeQuery);
  const [announcement] = useLiveQuery(initAnnouncement, announcementQuery);
  const [services] = useLiveQuery(initServices, slicedServicesQuery, {
    type: "services",
  });
  const [instagramLink] = useLiveQuery(initInstagramLink, instagramLinkQuery);

  return (
    <HomeLayout
      home={home}
      announcement={announcement}
      services={services}
      instagramLink={instagramLink}
    />
  );
}
