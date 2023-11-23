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
      name: "reference",
      type: "reference",
      to: [{ type: "links" }],
    },
    orderRankField({ type: "name" }),
  ],
});
