import { PhotoHeroProps } from "@/lib/types/photoHeroProps";
import {
  Box,
  Card,
  CardBody,
  Flex,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const PhotoHero = ({
  props,
  children,
}: {
  props: PhotoHeroProps;
  children: React.ReactNode;
}) => {
  const cardRole = useBreakpointValue({ base: undefined, md: "group" });

  return (
    <Flex
      as="section"
      pos="relative"
      maxW={{ base: "container.sm", md: "container.md" }}
      w="full"
      justifyContent="space-between"
      alignItems="center"
      gap={8}
      {...props.container}
    >
      <Box as="figure" role={cardRole} {...props.card.box}>
        <Card {...props.card.container}>
          <CardBody pos="relative" p={0} {...props.card.body}>
            <Image
              src={props.card.image.src}
              alt={props.card.image.alt}
              quality={50}
              sizes="(max-width: 480px) 80vw, 40vw"
              placeholder="blur"
              style={{ objectFit: "cover" }}
              fill
              priority
            />

            <Box
              as="span"
              pos="absolute"
              left={0}
              boxSize="full"
              bgGradient="linear(to top right, brand.dark 10%, transparent)"
              transition="200ms ease-in-out"
              _groupHover={{ opacity: 0 }}
            />
          </CardBody>
        </Card>
      </Box>

      <VStack align="start" left={0} bottom={0} {...props.vStack}>
        {children}
      </VStack>
    </Flex>
  );
};

export default PhotoHero;
