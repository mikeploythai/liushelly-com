import type { TypedObject } from "sanity";

import { PortableText } from "@portabletext/react";
import { BlockImage, BlockLink } from "sanity-studio/block-components";

export default function BlockContent({ content }: { content: TypedObject[] }) {
  return (
    <PortableText
      value={content}
      components={{
        types: { image: BlockImage },
        marks: { link: BlockLink },
      }}
    />
  );
}
