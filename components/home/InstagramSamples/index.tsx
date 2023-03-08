import {
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import instagramSampleData from "./data.json";

const InstagramSamples = () => {
  return (
    <Flex w="full" justify="center">
      <Container
        as={VStack}
        maxW={{ base: "container.md", md: "container.lg" }}
        w="full"
        p={4}
        spacing={4}
      >
        <Heading size={{ base: "md", sm: "lg" }}>
          Follow me on Instagram for <u>FREE</u> social media tips and advice.
        </Heading>

        <SimpleGrid columns={[2, 4]} gap={4}>
          {instagramSampleData.map(({ title, link, img }, index) => {
            return (
              <Link
                key={index}
                href={link}
                referrerPolicy="strict-origin-when-cross-origin"
                filter="auto"
                _hover={{ brightness: "87.5%" }}
                _active={{ brightness: "75%" }}
                isExternal
              >
                <Image
                  src={img}
                  alt={title}
                  height={1350}
                  width={1080}
                  quality={50}
                  sizes="(max-width: 480px) 40vw, 60vw"
                  style={{
                    objectFit: "cover",
                    border: "1px solid var(--chakra-colors-brand-dark)",
                  }}
                />
              </Link>
            );
          })}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default InstagramSamples;
