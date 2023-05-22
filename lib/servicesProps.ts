import { ImageMetadata, TypedObject } from "@sanity/types";

export interface ServicesProps {
  name: string;
  description: TypedObject[];
  cta: {
    hook: string;
    link: string;
  };
  img: {
    asset: {
      url: string;
      metadata: ImageMetadata;
    };
  };
  packages?: ServicePackages[];
  contents?: TypedObject[];
}

export interface ServicePackages {
  name: string;
  price?: number;
  details?: string;
}
