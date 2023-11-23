import type { Image, SanityDocument, TypedObject } from "sanity";

export interface SanityImage extends Image {
  alt: string;
  lqip: string;
  href?: string;
}

export interface ListItem extends SanityDocument {
  name: string;
  image: SanityImage;
  content: TypedObject[];
  slug: {
    current: string;
  };
}

export interface Service extends ListItem {
  faq: {
    question: string;
    answer: TypedObject[];
  }[];
}

export type Testimonial = {
  author: string;
  quote: TypedObject[];
};
