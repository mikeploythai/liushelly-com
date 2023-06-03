import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export default defineType({
  name: "marquee",
  title: "Marquee",
  type: "document",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    orderRankField({ type: "string" }),
  ],
  orderings: [orderRankOrdering],
});
