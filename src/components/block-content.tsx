import type { TypedObject } from "sanity";

import { PortableText } from "@portabletext/react";
import { BlockImage, BlockLink } from "sanity-studio/block-components";

export default function BlockContent({ content }: { content?: TypedObject[] }) {
  if (!content) {
    return (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        voluptates! Voluptatibus dolore harum possimus excepturi quod nemo
        veritatis expedita atque molestiae eum incidunt ut ipsum, iure
        consequatur tempora voluptates distinctio.
      </p>
    );
  }

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
