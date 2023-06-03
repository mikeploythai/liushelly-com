import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "@sanity/types";

export default defineType({
  title: "Socials",
  name: "socials",
  type: "document",
  fields: [
    {
      title: "Platform",
      name: "platform",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
