import aboutImg from "@/public/about-img.png";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Bio from "./Bio";

const Content = () => {
  return (
    <>
      <Flex as="section" w="full" justify="center">
        <Container
          as={Flex}
          flexDir={{ base: "column", md: "row" }}
          maxW={{ base: "container.sm", md: "container.md" }}
          w="full"
          alignItems="center"
          p={4}
          gap={8}
        >
          <Box as="span" w="full" pr={2} pb={{ base: 2, md: 0 }}>
            <Card variant="shadow">
              <CardBody
                as={VStack}
                role="group"
                w={{ base: "full", md: "2xs" }}
                h="sm"
                p={0}
                spacing={0}
              >
                <Image
                  src={aboutImg}
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
                  left={0}
                  boxSize="full"
                  bgGradient="linear(to top right, brand.dark 10%, transparent)"
                  transition="200ms ease-in-out"
                  _groupHover={{ opacity: 0 }}
                />
              </CardBody>
            </Card>
          </Box>

          <VStack align="start">
            <Heading size={{ base: "lg", md: "xl" }}>About me!</Heading>
            <Bio />
          </VStack>
        </Container>
      </Flex>
    </>
  );
};

export default Content;
