import type { Image, SanityDocument, TypedObject } from "sanity";

export interface SanityImage extends Image {
  lqip: string;
}

export interface ListItem extends SanityDocument {
  name: string;
  image: SanityImage;
  content: TypedObject[];
  slug: {
    current: string;
  };
}
