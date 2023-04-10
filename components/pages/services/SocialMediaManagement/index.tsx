import servicesData from "@/lib/data/servicesData";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import Inclusions from "./Inclusions";

const SocialMediaManagement = () => {
  return (
    <VStack
      as="section"
      maxW="container.sm"
      w="full"
      p={{ base: 4, sm: "4rem 1rem" }}
      spacing={{ base: 4, sm: 16 }}
    >
      <Heading
        as="h1"
        size={{ base: "lg", sm: "xl" }}
        textAlign={{ base: "start", sm: "center" }}
      >
        Take your brand&apos;s social media presence to the next level.
      </Heading>

      <Box pr={2} pb={2}>
        <Card variant="shadow">
          <CardBody as={VStack} spacing={4}>
            <Box pos="relative" w="full" h="3xs" border="1px solid">
              <Image
                src={servicesData[0].img}
                alt=""
                quality={50}
                sizes="(max-width: 480px) 60vw, 40vw"
                style={{ objectFit: "cover" }}
                fill
              />
            </Box>

            <VStack align="start">
              <Heading size="lg" textTransform="capitalize">
                {servicesData[0].title === "social media management" && (
                  <u>DONE FOR YOU</u>
                )}{" "}
                {servicesData[0].title}
              </Heading>

              <Text fontSize="sm" whiteSpace="pre-line">
                {servicesData[0].description}
              </Text>
            </VStack>

            <Inclusions />

            <Button
              as={Link}
              href={servicesData[0].url}
              referrerPolicy="strict-origin-when-cross-origin"
              size="sm"
              rightIcon={<FaAngleDoubleRight />}
              w="full"
              isExternal
            >
              {servicesData[0].cta}
            </Button>
          </CardBody>
        </Card>
      </Box>
    </VStack>
  );
};

export default SocialMediaManagement;
