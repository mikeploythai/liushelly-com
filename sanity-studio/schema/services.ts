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
      of: [{ type: "block" }, { type: "image" }],
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
