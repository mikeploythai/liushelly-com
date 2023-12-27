import { IconInfoCircle } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  icon: IconInfoCircle,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      hidden: true,
      readOnly: true,
    },
    {
      name: "description",
      type: "text",
    },
  ],
  initialValue: {
    title: "SEO",
  },
});
