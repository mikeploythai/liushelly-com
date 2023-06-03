import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import serviceQuery from "@/lib/queries/servicesQuery";
import sanity from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import FAQ from "./_components/FAQ";
import MainProduct from "./_components/MainProduct";
import OneTimeServices from "./_components/OneTimeServices";
import PreviewServices from "./_components/PreviewServices";

const faqQuery = groq`*[_type=="faq"] | order(orderRank)`;

export const metadata = {
  title: "SERVICES",
};

export default async function Services() {
  const serviceData = await sanity.fetch(serviceQuery);
  const faqData = await sanity.fetch(faqQuery);

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewServices serviceQuery={serviceQuery} faqQuery={faqQuery} />
      </PreviewSuspense>
    );

  return (
    <>
      <MainProduct data={serviceData[0]} />
      <OneTimeServices data={serviceData} />
      <FAQ data={faqData} />
    </>
  );
}
