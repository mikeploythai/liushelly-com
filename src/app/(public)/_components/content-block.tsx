import type { TypedObject } from "sanity";

import { PortableText } from "@portabletext/react";
import { BlockImage, BlockLink } from "sanity-studio/portable-text/components";

export default function ContentBlock({ content }: { content: TypedObject[] }) {
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
