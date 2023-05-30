import { ImageMetadata, TypedObject } from "@sanity/types";

export interface CardDataProps {
  name: string;
  description: TypedObject[];
  button: {
    cta: string;
    link: string;
  };
  img: {
    asset: {
      url: string;
      metadata: ImageMetadata;
    };
  };
}

export interface PortfolioProps extends CardDataProps {
  slug: { current: string };
}
