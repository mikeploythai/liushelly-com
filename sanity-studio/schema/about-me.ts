import { IconUserCircle } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "aboutMe",
  title: "About Me",
  icon: IconUserCircle,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      hidden: true,
      readOnly: true,
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            storeOriginalFilename: false,
          },
        },
      ],
    },
  ],
  initialValue: { title: "About Me" },
});
