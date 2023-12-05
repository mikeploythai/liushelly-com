import type { Announcement, Home, ListItem } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import {
  announcementQuery,
  homeQuery,
  instagramLinkQuery,
  slicedServicesQuery,
} from "sanity-studio/queries";
import HomeLayout from "~/components/home/layout";
import HomeLayoutPreview from "~/components/home/preview";
import PreviewProvider from "~/components/providers/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

export default async function HomePage() {
  const home = await sanityFetch<Home>({ query: homeQuery, tags: ["home"] });
  const announcement = await sanityFetch<Announcement>({
    query: announcementQuery,
    tags: ["announcement"],
  });
  const services = await sanityFetch<ListItem[]>({
    query: slicedServicesQuery,
    params: { type: "services" },
    tags: ["services"],
  });
  const instagramLink = await sanityFetch<{ href: string }>({
    query: instagramLinkQuery,
    tags: ["links"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <HomeLayoutPreview
          initHome={home}
          initAnnouncement={announcement}
          initServices={services}
          initInstagramLink={instagramLink}
        />
      </PreviewProvider>
    );
  }

  return (
    <HomeLayout
      home={home}
      announcement={announcement}
      services={services}
      instagramLink={instagramLink}
    />
  );
}
