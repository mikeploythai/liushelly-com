import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import sanity from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import PortfolioCards from "./_components/PortfolioCards";
import PreviewPortfolio from "./_components/PreviewPortfolio";

const query = groq`
*[_type=="portfolio"] | order(orderRank) {
  ...,
  image {
    ...,
    'blur': asset->metadata.lqip,
  }
}
`;

export const metadata = {
  title: "PORTFOLIO",
};

export default async function Portfolio() {
  const data = await sanity.fetch(query);

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewPortfolio query={query} />
      </PreviewSuspense>
    );

  return <PortfolioCards data={data} />;
}
