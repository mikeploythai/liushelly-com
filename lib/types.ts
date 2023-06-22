import { Image, SanityDocument, Slug, TypedObject } from "@sanity/types";

interface SanityImage extends Image {
  blur: string;
}

export interface Service extends SanityDocument {
  name?: string;
  description?: TypedObject[];
  cta?: {
    hook?: string;
    link?: string;
  };
  image?: SanityImage;
}

export interface MainService extends Service {
  extras?: Array<{
    tab?: string;
    description?: TypedObject[];
  }>;
}

export interface FAQ extends SanityDocument {
  question?: string;
  answer?: TypedObject[];
}

export interface Hero extends SanityDocument {
  image?: SanityImage;
  description?: TypedObject[];
  cta?: {
    hook?: string;
    link?: string;
  };
  page: string;
}

export interface Marquee extends SanityDocument {
  label?: string;
}

export interface Testimonial extends SanityDocument {
  name?: string;
  occupation?: string;
  quote?: TypedObject[];
}

export interface InstagramCard extends SanityDocument {
  title?: string;
  image?: SanityImage;
  link?: string;
}

export interface Social extends SanityDocument {
  platform?: string;
  link?: string;
}

export interface Portfolio extends SanityDocument {
  name?: string;
  slug?: Slug;
  description?: TypedObject[];
  cta?: {
    hook?: string;
    link?: string;
  };
  image?: SanityImage;
}

export interface PrivacyPolicy extends SanityDocument {
  policy: TypedObject[];
}
