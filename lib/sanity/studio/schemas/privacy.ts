import { defineType } from "@sanity/types";
import { extendedBlock } from "../customBlocks";

export default defineType({
  title: "Privacy",
  name: "privacy",
  type: "document",
  fields: [
    {
      title: "Policy",
      name: "policy",
      type: "array",
      of: [
        {
          type: "block",
          ...extendedBlock,
        },
      ],
    },
  ],
});
