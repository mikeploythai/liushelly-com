import { TypedObject } from "@sanity/types";
import { CardDataProps } from "./portfolioProps";

export interface ServicesProps extends CardDataProps {
  packages?: ServicePackages[];
  contents?: TypedObject[];
}

export interface ServicePackages {
  name: string;
  price?: number;
  details?: string;
}
