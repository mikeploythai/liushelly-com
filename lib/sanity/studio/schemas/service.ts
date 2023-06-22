import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";
import { extendedBlock, simpleBlock } from "../customBlocks";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          ...simpleBlock,
        },
      ],
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        { title: "Hook", name: "hook", type: "string" },
        { title: "Link", name: "link", type: "url" },
      ],
    },
    {
      title: "Extras",
      description: "Used primarily for the main product.",
      name: "extras",
      type: "array",
      of: [
        {
          name: "extra",
          type: "object",
          fields: [
            {
              name: "tab",
              description:
                "Which tab does this extra belong to? (ex. the packages tab)",
              type: "string",
            },
            {
              name: "description",
              type: "array",
              of: [
                {
                  type: "block",
                  ...extendedBlock,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
