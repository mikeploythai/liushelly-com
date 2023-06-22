import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";
import { simpleBlock } from "../customBlocks";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { type: "string", name: "question" },
    {
      type: "array",
      of: [
        {
          type: "block",
          ...simpleBlock,
        },
      ],
      name: "answer",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
