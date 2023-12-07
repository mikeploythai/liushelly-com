import { IconHome } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  icon: IconHome,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      hidden: true,
      readOnly: true,
    },
    {
      name: "hero",
      type: "object",
      fields: [
        {
          name: "heading",
          type: "string",
        },
        {
          name: "cta",
          title: "Call to Action",
          type: "object",
          fields: [
            {
              name: "reference",
              type: "reference",
              to: [{ type: "links" }],
            },
            {
              name: "text",
              type: "string",
            },
          ],
        },
        {
          name: "image",
          type: "image",
          options: {
            hotspot: true,
            storeOriginalFilename: false,
          },
          fields: [{ name: "alt", type: "string" }],
        },
      ],
    },
    {
      name: "instagramPosts",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            storeOriginalFilename: false,
          },
          fields: [
            { name: "alt", type: "string" },
            { name: "href", title: "Link", type: "url" },
          ],
        },
      ],
    },
  ],
  initialValue: { title: "Home" },
});
