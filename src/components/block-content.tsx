import type { TypedObject } from "sanity";

import { PortableText } from "@portabletext/react";
import { BlockImage, BlockLink } from "sanity-studio/block-components";

export default function BlockContent({ content }: { content?: TypedObject[] }) {
  if (!content) {
    return (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        illum aliquam quo, tempora explicabo quae quidem expedita harum soluta
        adipisci eaque mollitia saepe facilis tenetur quam, fugit quaerat qui
        corrupti repudiandae obcaecati odit, sed fugiat aspernatur! Ex, quis.
        Ullam, mollitia reprehenderit. Doloremque laboriosam quibusdam nostrum
        est sequi in soluta, inventore assumenda mollitia rem reprehenderit
        autem eveniet tempore vero nisi! Quam excepturi illum expedita et unde,
        a corporis doloribus animi, in, atque id laboriosam quidem aut possimus
        voluptates repellendus? Exercitationem at dicta eaque sequi illum ipsum
        quod blanditiis quisquam, ullam id tempore dolore, eos, magnam aliquid
        eligendi repellendus similique tenetur ut.
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
