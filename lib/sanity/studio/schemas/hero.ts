import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "@sanity/types";
import { extendedBlock } from "../customBlocks";

export default defineType({
  title: "Hero",
  name: "hero",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      description: "Image must be 390x594px",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
          ...extendedBlock,
        },
      ],
    },
    {
      name: "cta",
      title: "Call to Action",
      description: "Used primarily for the home page",
      type: "object",
      fields: [
        { title: "Hook", name: "hook", type: "string" },
        { title: "Link", name: "link", type: "url" },
      ],
    },
    {
      name: "page",
      title: "Page",
      description: "Which page is this used in?",
      type: "string",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
