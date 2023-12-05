import type { Metadata } from "next";
import type { ServicesData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { servicesQuery } from "sanity-studio/queries";
import ServicesLayout from "~/components/services/layout";

export const metadata: Metadata = {
  title: "SERVICES",
  description:
    "Shelly Liu provides digital marketing services focused on organic growth. Get in touch to learn how Shelly can help your business flourish online.",
  openGraph: {
    title: "SERVICES | Shelly Liu",
    description:
      "Shelly Liu provides digital marketing services focused on organic growth. Get in touch to learn how Shelly can help your business flourish online.",
    url: "https://liushelly.com/services",
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
