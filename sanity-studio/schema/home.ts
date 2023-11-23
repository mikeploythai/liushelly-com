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
              name: "text",
              type: "string",
            },
            {
              name: "href",
              title: "Link",
              type: "url",
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
      name: "testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "author", type: "string" },
            { name: "quote", type: "array", of: [{ type: "block" }] },
          ],
        },
      ],
    },
    {
      name: "featuredInstagramPosts",
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
