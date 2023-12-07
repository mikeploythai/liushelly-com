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

export interface SocialLink extends SanityDocument {
  name: string;
  href: string;
}

// Home
export type HomeData = {
  home: Home;
  announcement: Announcement;
  services: ListItem[];
  testimonials: Testimonial[];
  instagram: { href: string };
};

interface Home extends SanityDocument {
  hero: {
    heading: string;
    cta: {
      text: string;
      href: string;
    };
    image: SanityImage;
  };
  instagramPosts: SanityImage[];
}

// About
export interface AboutData extends SanityDocument {
  content: TypedObject[];
  images: SanityImage[];
}

// Services
export type ServicesData = {
  mainService: ListItem;
  otherServices: ListItem[];
  announcement: Announcement;
};

export interface ServiceData extends ListItem {
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

export type PreviewSecret = `${string}.${string}`;
