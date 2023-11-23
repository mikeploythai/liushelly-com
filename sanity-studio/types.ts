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

export type Testimonial = {
  author: string;
  quote: TypedObject[];
};
