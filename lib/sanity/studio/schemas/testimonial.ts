import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";
import { quoteBlock } from "../customBlocks";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { type: "string", name: "name" },
    { type: "string", name: "occupation" },
    {
      type: "array",
      of: [
        {
          type: "block",
          ...quoteBlock,
        },
      ],
      name: "quote",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
