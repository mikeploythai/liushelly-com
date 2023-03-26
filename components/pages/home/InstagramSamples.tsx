import instagramSamplesData from "@/lib/data/instagramSamplesData";
import {
  Card,
  CardBody,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const InstagramSamples = () => {
  return (
    <VStack
      as="section"
      maxW={{ base: "container.md", md: "container.lg" }}
      w="full"
      p={4}
      spacing={4}
    >
      <Heading size={{ base: "md", sm: "lg" }}>
        Follow me on Instagram for <u>FREE</u> social media tips and advice.
      </Heading>

      <SimpleGrid columns={[2, 4]} gap={4}>
        {instagramSamplesData.map(({ title, link, img }, index) => {
          return (
            <Card
              key={index}
              as={Link}
              href={link}
              referrerPolicy="strict-origin-when-cross-origin"
              variant="interactive"
              isExternal
            >
              <CardBody>
                <Image
                  src={img}
                  alt={title}
                  height={1350}
                  width={1080}
                  quality={50}
                  sizes="(max-width: 480px) 40vw, 60vw"
                  style={{ objectFit: "cover" }}
                />
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default InstagramSamples;
