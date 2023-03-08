import {
  Box,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  img: string | StaticImageData;
  imgBlur?: string;
  imgHeight?: string;
  children: React.ReactNode;
}

const Hero = ({ img, imgBlur, imgHeight = "lg", children }: HeroProps) => {
  const imgRole = useBreakpointValue({ base: "img", sm: "group" });
  const imgBorder = useBreakpointValue({
    base: "none",
    sm: "1px solid var(--chakra-colors-brand-dark)",
  });

  return (
    <Flex as="section" pos="relative" w="full" justify="center">
      <Container
        as={HStack}
        flexDir="row-reverse"
        maxW={{ base: "container.sm", md: "container.md" }}
        w="full"
        justifyContent="space-between"
        p={{ base: 0, sm: 4 }}
        spacing={0}
        gap={8}
      >
        <VStack
          role={imgRole}
          pos="relative"
          h={{ base: imgHeight, sm: "xs", md: "sm" }}
          w={{ base: "full", sm: "md" }}
          m={{ base: "unset", sm: "0 0.5rem 0.5rem 0" }}
          spacing={0}
          transition="200ms ease-in-out"
          shadow={{
            base: "unset",
            sm: ".5rem .5rem 0 var(--chakra-colors-brand-dark)",
          }}
          _hover={{
            shadow: {
              base: "unset",
              sm: ".75rem .75rem 0 var(--chakra-colors-brand-dark)",
            },
          }}
        >
          <Image
            src={img}
            alt=""
            quality={50}
            sizes="(max-width: 480px) 80vw, 40vw"
            placeholder="blur"
            // blurDataURL={String(imgBlur)}
            style={{ objectFit: "cover", border: imgBorder }}
            fill
            priority
          />

          <Box
            pos="absolute"
            w="full"
            h="full"
            bgGradient="linear(to top right, brand.dark 10%, transparent)"
            transition="200ms ease-in-out"
            _groupHover={{ opacity: 0 }}
          />
        </VStack>

        <VStack
          pos={{ base: "absolute", sm: "unset" }}
          bottom={0}
          w="full"
          align="start"
          p={{ base: 4, sm: 0 }}
          gap={2}
        >
          {children}
        </VStack>
      </Container>
    </Flex>
  );
};

export default Hero;
