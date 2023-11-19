import { defineType } from "sanity";

export default defineType({
  name: "portfolio",
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
  ],
});
