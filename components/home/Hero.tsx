import heroImg from "@/public/hero-img.png";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const Hero = () => {
  const cardRole = useBreakpointValue({ base: "img", md: "group" });
  const cardVariant = useBreakpointValue({ base: "unset", sm: "shadow" });

  return (
    <Flex as="section" w="full" justify="center">
      <Container
        as={HStack}
        pos="relative"
        flexDir="row-reverse"
        maxW={{ base: "container.sm", md: "container.md" }}
        w="full"
        p={{ base: 0, sm: 4 }}
        spacing={0}
        gap={8}
      >
        <Box
          as="span"
          w={{ base: "full", sm: "unset" }}
          pr={{ base: 0, sm: 2 }}
          pb={{ base: 0, sm: 2 }}
        >
          <Card variant={cardVariant}>
            <CardBody
              as={VStack}
              role={cardRole}
              w={{ base: "full", sm: "3xs", md: "2xs" }}
              h={{ base: "lg", sm: "xs", md: "sm" }}
              p={0}
              spacing={0}
            >
              <Image
                src={heroImg}
                alt="Photo of Shelly Liu, Social Media Manager"
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
                boxSize="full"
                bgGradient="linear(to top right, brand.dark 10%, transparent)"
                transition="200ms ease-in-out"
                _groupHover={{ opacity: 0 }}
              />
            </CardBody>
          </Card>
        </Box>

        <VStack
          pos={{ base: "absolute", sm: "unset" }}
          align="start"
          bottom={0}
          p={{ base: 4, sm: 0 }}
          spacing={4}
        >
          <Heading
            size={{ base: "lg", md: "xl" }}
            variant={{ base: "secondary", sm: "primary" }}
          >
            Let me help your business <u>FLOURISH</u> through organic social
            media growth.
          </Heading>

          <Button
            as={Link}
            size={{ base: "sm", sm: "md" }}
            variant={{ base: "secondary", sm: "primary" }}
            rightIcon={<FaAngleDoubleRight />}
            href="https://calendly.com/shellyliu/30mindiscoverychat"
            referrerPolicy="strict-origin-when-cross-origin"
            isExternal
          >
            Work with me
          </Button>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Hero;
