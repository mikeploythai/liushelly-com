import { IconBellRinging } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcement",
  icon: IconBellRinging,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      hidden: true,
      readOnly: true,
    },
    {
      name: "text",
      type: "string",
    },
  ],
  initialValue: { title: "Announcement" },
});
