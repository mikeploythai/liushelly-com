import type { Image, SanityDocument, TypedObject } from "sanity";

// Content Types
export interface SanityImage extends Image {
  alt: string;
  lqip: string;
  href?: string;
  _key?: string;
}

export interface ListItem extends SanityDocument {
  name: string;
  image: SanityImage;
  content: TypedObject[];
  slug: {
    current: string;
  };
}

// Components
export interface Announcement extends SanityDocument {
  text: string;
}

export type Testimonial = {
  author: string;
  quote: TypedObject[];
};

export interface Service extends ListItem {
  cta: {
    text: string;
    href: string;
  };
  tabs: {
    name: string;
    content: TypedObject[];
  }[];
  faq: {
    question: string;
    answer: TypedObject[];
  }[];
}

export interface SocialLink extends SanityDocument {
  name: string;
  href: string;
}

// Home
export interface Home extends SanityDocument {
  hero: {
    heading: string;
    cta: {
      text: string;
      href: string;
    };
    image: SanityImage;
  };
  testimonials: Testimonial[];
  featuredInstagramPosts: SanityImage[];
}

// About
export interface About extends SanityDocument {
  content: TypedObject[];
  images: SanityImage[];
}

export type PreviewSecret = `${string}.${string}`;
