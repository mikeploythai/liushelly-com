import { orderRankField } from "@sanity/orderable-document-list";
import { IconFolderOpen } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "portfolio",
  title: "Portfolio",
  icon: IconFolderOpen,
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
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            { name: "alt", type: "string" },
            { name: "href", title: "Link", type: "url" },
          ],
        },
      ],
    },
    {
      name: "image",
      type: "image",
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    },
    orderRankField({ type: "name" }),
  ],
});
