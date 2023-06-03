import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "@sanity/types";
import { extendedBlock } from "../customBlocks";

export default defineType({
  title: "Portfolio",
  name: "portfolio",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
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
        { type: "image" },
      ],
    },
    {
      title: "Call to Action",
      name: "cta",
      type: "object",
      fields: [
        { title: "Hook", name: "hook", type: "string" },
        { title: "Link", name: "link", type: "url" },
      ],
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
