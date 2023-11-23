import { orderRankField } from "@sanity/orderable-document-list";
import { IconBuildingStore } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  icon: IconBuildingStore,
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    },
    {
      name: "tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "content", type: "array", of: [{ type: "block" }] },
          ],
        },
      ],
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", type: "string" },
            { name: "answer", type: "array", of: [{ type: "block" }] },
          ],
        },
      ],
    },
    orderRankField({ type: "name" }),
  ],
});
