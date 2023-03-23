import {
  BoxProps,
  CardBodyProps,
  CardProps,
  ContainerProps,
  StackProps,
} from "@chakra-ui/react";
import { ImageProps } from "next/image";

export interface PhotoHeroProps {
  container: ContainerProps;
  card: {
    cardBox: BoxProps;
    cardContainer: CardProps;
    cardBody: CardBodyProps;
    cardImg: ImageProps;
  };
  vStack?: StackProps;
}
