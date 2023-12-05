import type { Metadata } from "next";
import type { ServicesData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { servicesQuery } from "sanity-studio/queries";
import ServicesLayout from "~/components/services/layout";
import { serverEnv } from "~/env/server.mjs";

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

  return <ServicesLayout data={data} />;
}
