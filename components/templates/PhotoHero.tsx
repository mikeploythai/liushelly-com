import { PhotoHeroProps } from "@/lib/types/photoHeroProps";
import {
  Box,
  Card,
  CardBody,
  Container,
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
  const cardRole = useBreakpointValue({ base: "img", md: "group" });

  return (
    <Flex as="section" w="full" justify="center">
      <Container
        as={Flex}
        pos="relative"
        maxW={{ base: "container.sm", md: "container.md" }}
        w="full"
        justifyContent="space-between"
        alignItems="center"
        gap={8}
        {...props.container}
      >
        <Box as="span" role={cardRole} {...props.card.cardBox}>
          <Card variant={props.card.cardContainer.variant}>
            <CardBody p={0} {...props.card.cardBody}>
              <Image
                quality={50}
                sizes="(max-width: 480px) 80vw, 40vw"
                placeholder="blur"
                style={{ objectFit: "cover" }}
                fill
                priority
                {...props.card.cardImg}
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
      </Container>
    </Flex>
  );
};

export default PhotoHero;
