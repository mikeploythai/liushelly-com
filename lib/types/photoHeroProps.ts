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
    box: BoxProps;
    container: CardProps;
    body: CardBodyProps;
    image: ImageProps;
  };
  vStack?: StackProps;
}
