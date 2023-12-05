import type { AboutData } from "~/lib/types";

import BlockContent from "../block-content";
import MarkdownWrapper from "../markdown-provider";
import PageWrapper from "../page-wrapper";
import PhotoGrid from "../photo-grid";

export default function AboutLayout({ data }: { data: AboutData }) {
  if (!data) return;

  return (
    <PageWrapper className="mx-auto flex w-full max-w-screen-lg flex-col justify-center gap-6 p-6 md:gap-12 md:p-12">
      <MarkdownWrapper>
        <article className="w-full">
          <BlockContent content={data.content} />
        </article>
      </MarkdownWrapper>

      <PhotoGrid images={data.images} width={320} height={480} />
    </PageWrapper>
  );
}
