import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "@sanity/types";

export default defineType({
  title: "Instagram Card",
  name: "instagramCard",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      description: "Image must be 1080x1350px",
      type: "image",
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
