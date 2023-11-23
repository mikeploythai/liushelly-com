import type { TypedObject } from "sanity";
import type { SanityImage } from "sanity-studio/types";

import { groq, type SanityDocument } from "next-sanity";
import { sanityFetch } from "sanity-studio/lib/fetch";
import ContentBlock from "~/components/content-block";
import MarkdownWrapper from "~/components/markdown-wrapper";
import PageWrapper from "~/components/page-wrapper";
import PhotoGrid from "~/components/photo-grid";

export const metadata = {
  title: "ABOUT",
  alternates: {
    canonical: "/about",
  },
};

interface About extends SanityDocument {
  content: TypedObject[];
  images: SanityImage[];
}

export default async function AboutPage() {
  const about = await sanityFetch<About>({ query, tags: ["aboutMe"] });
  if (!about) return;

  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-lg flex-col justify-center gap-6 p-6 md:gap-12 md:p-12">
      <MarkdownWrapper>
        <article className="w-full">
          <ContentBlock content={about.content} />
        </article>
      </MarkdownWrapper>

      <PhotoGrid images={about.images} width={320} height={480} />
    </PageWrapper>
  );
}

const query = groq`
*[_type == "aboutMe"][0] {
  ...,
  images[] {
    ...,
    'lqip': asset->metadata.lqip,
  }
}`;
