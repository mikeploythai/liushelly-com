import SmallText from "@/components/studio/SmallText";
import TitleText from "@/components/studio/TitleText";

export const simpleBlock = {
  styles: [],
  lists: [],
  marks: {
    decorators: [
      { title: "Bold", value: "strong" },
      { title: "Italics", value: "em" },
      { title: "Underline", value: "underline" },
    ],
    annotations: [],
  },
};

export const quoteBlock = {
  styles: [
    { title: "Quote", value: "blockquote" },
    { title: "Normal", value: "normal" },
  ],
  lists: [],
  marks: {
    decorators: [
      { title: "Bold", value: "strong" },
      { title: "Italics", value: "em" },
      { title: "Underline", value: "underline" },
    ],
    annotations: [],
  },
};

export const extendedBlock = {
  styles: [
    { title: "Normal", value: "normal" },
    { title: "Title", value: "title", component: TitleText },
    { title: "Heading 1", value: "h1" },
    { title: "Heading 2", value: "h2" },
    { title: "Heading 3", value: "h3" },
    { title: "Heading 4", value: "h4" },
    { title: "Small", value: "small", component: SmallText },
  ],
  lists: [
    { title: "Bullet", value: "bullet" },
    { title: "Numbered", value: "number" },
  ],
  marks: {
    decorators: [
      { title: "Bold", value: "strong" },
      { title: "Italics", value: "em" },
      { title: "Underline", value: "underline" },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        title: "Link",
        fields: [
          {
            name: "url",
            type: "url",
          },
        ],
      },
    ],
  },
};
