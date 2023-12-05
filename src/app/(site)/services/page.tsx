import type { Metadata } from "next";
import type { Announcement, ListItem } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { announcementQuery, orderableQuery } from "sanity-studio/queries";
import PreviewProvider from "~/components/providers/preview";
import ServicesLayout from "~/components/services/layout";
import ServicesPreview from "~/components/services/preview";
import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";

const title = "SERVICES";
const description =
  "Shelly Liu provides digital marketing services focused on organic growth. Get in touch to learn how Shelly can help your business flourish online.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Shelly Liu`,
    description,
    url: `${serverEnv.BASE_URL}/services`,
    type: "website",
  },
};

export default async function ServicesPage() {
  const services = await sanityFetch<ListItem[]>({
    query: orderableQuery,
    params: { type: "services" },
    tags: ["services"],
  });
  const announcement = await sanityFetch<Announcement>({
    query: announcementQuery,
    tags: ["announcement"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <ServicesPreview
          initServices={services}
          initAnnouncement={announcement}
        />
      </PreviewProvider>
    );
  }

  return <ServicesLayout services={services} announcement={announcement} />;
}
