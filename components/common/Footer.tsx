import {
  Container,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex as="footer" w="full" justify="center" bgColor="brand.light">
      <Container
        as={Flex}
        flexDir={{ base: "column", sm: "row" }}
        maxW="container.sm"
        w="full"
        justify="space-between"
        mx={12}
        py={16}
        gap={8}
      >
        <VStack align={{ base: "center", sm: "start" }} spacing={1}>
          <Heading size="md" textAlign="center">
            &copy; Shelly Liu {year}
          </Heading>

          <HStack spacing={1}>
            <Text as={Link} href="/privacy" fontSize="0.625rem">
              Privacy Policy
            </Text>

            <Text fontSize="0.625rem">&middot;</Text>

            <Text
              as={ChakraLink}
              href="https://mikeploythai.com"
              referrerPolicy="strict-origin-when-cross-origin"
              fontSize="0.625rem"
              isExternal
            >
              Built by Mike
            </Text>
          </HStack>
        </VStack>

        <HStack as="nav" justify="center">
          <SocialLinks isDrawer={false} />
        </HStack>
      </Container>
    </Flex>
  );
};

export default Footer;
