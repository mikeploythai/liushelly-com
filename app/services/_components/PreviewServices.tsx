"use client";

import { usePreview } from "@/lib/sanity/preview";
import FAQ from "./FAQ";
import MainProduct from "./MainProduct";
import OneTimeServices from "./OneTimeServices";

type PreviewServicesProps = {
  serviceQuery: string;
  faqQuery: string;
};

export default function PreviewServices({
  serviceQuery,
  faqQuery,
}: PreviewServicesProps) {
  const serviceData = usePreview(null, serviceQuery);
  const faqData = usePreview(null, faqQuery);

  return (
    <>
      <MainProduct data={serviceData[0]} />
      <OneTimeServices data={serviceData} />
      <FAQ data={faqData} />
    </>
  );
}
