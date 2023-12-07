import { orderRankField } from "@sanity/orderable-document-list";
import { IconBlockquote, IconDeviceMobile } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  icon: IconBlockquote,
  type: "document",
  fields: [
    {
      name: "author",
      type: "string",
    },
    {
      name: "quote",
      type: "array",
      of: [{ type: "block" }],
    },
    orderRankField({ type: "name" }),
  ],
});
