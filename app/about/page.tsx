import PreviewSuspense, { Loading } from "@/components/shared/PreviewSuspense";
import sanity from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import AboutMe from "./_components/AboutMe";
import PreviewAbout from "./_components/PreviewAbout";

const query = groq`
*[_type=="hero" && page=="about"][0] {
  ...,
  image {
    ...,
    'blur': asset->metadata.lqip,
  }
}
`;

export const metadata = {
  title: "ABOUT",
};

export default async function About() {
  const data = await sanity.fetch(query);

  if (draftMode().isEnabled)
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewAbout query={query} />
      </PreviewSuspense>
    );

  return <AboutMe data={data} />;
}
