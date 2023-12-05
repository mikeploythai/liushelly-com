import type { About } from "~/lib/types";

import BlockContent from "../block-content";
import PageWrapper from "../page-wrapper";
import PhotoGrid from "../photo-grid";
import MarkdownProvider from "../providers/markdown";

export default function AboutLayout({ about }: { about: About }) {
  if (!about) return;

  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-lg flex-col justify-center gap-6 p-6 md:gap-12 md:p-12">
      <MarkdownProvider>
        <article className="w-full">
          <BlockContent content={about.content} />
        </article>
      </MarkdownProvider>

      <PhotoGrid images={about.images} width={320} height={480} />
    </PageWrapper>
  );
}
