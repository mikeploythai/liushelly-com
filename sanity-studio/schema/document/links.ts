import { IconLink } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "links",
  icon: IconLink,
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "href",
      title: "Link",
      type: "url",
    },
  ],
});
