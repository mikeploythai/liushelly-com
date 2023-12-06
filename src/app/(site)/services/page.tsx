import type { Metadata } from "next";
import type { ServicesData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { servicesQuery } from "sanity-studio/queries";
import PreviewProvider from "~/components/providers/preview";
import ServicesLayout from "~/components/services/layout";
import ServicesLayoutPreview from "~/components/services/preview";
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
  const data = await sanityFetch<ServicesData>({
    query: servicesQuery,
    params: { type: "services" },
    tags: ["services", "announcement"],
  });

  if (isPreviewMode()) {
    return (
      <PreviewProvider token={serverEnv.SANITY_READ_TOKEN}>
        <ServicesLayoutPreview initData={data} />
      </PreviewProvider>
    );
  }

  return <ServicesLayout data={data} />;
}
