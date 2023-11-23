import { orderRankField } from "@sanity/orderable-document-list";
import { IconDeviceMobile } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "socials",
  title: "Socials",
  icon: IconDeviceMobile,
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
    orderRankField({ type: "name" }),
  ],
});
