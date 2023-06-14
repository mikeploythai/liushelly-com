import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import sanity from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import Policy from "./_components/Policy";
import PreviewPrivacy from "./_components/PreviewPrivacy";

const query = groq`*[_type=="privacy"][0]`;

export const revalidate = 60;

export const metadata = {
  title: "PRIVACY",
};

export default async function Privacy() {
  const data = await sanity.fetch(query);

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewPrivacy query={query} />
      </PreviewSuspense>
    );

  return <Policy data={data} />;
}
