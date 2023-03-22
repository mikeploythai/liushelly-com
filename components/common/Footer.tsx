import {
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex as="footer" w="full" justifyContent="center" bgColor="brand.light">
      <Container
        as={Flex}
        flexDir={{ base: "column", sm: "row" }}
        maxW="container.sm"
        w="full"
        justifyContent="space-between"
        py={16}
        mx={12}
        gap={8}
      >
        <VStack align={{ base: "center", sm: "start" }} spacing={1}>
          <Heading size="md" textAlign="center">
            &copy; Shelly Liu {year}
          </Heading>

          <Text
            as={Link}
            href="https://mikeploythai.com"
            referrerPolicy="strict-origin-when-cross-origin"
            fontFamily="mono"
            fontSize="0.625rem"
            isExternal
          >
            design/dev by mike.
          </Text>
        </VStack>

        <HStack as="ul" justify="center">
          <SocialLinks isDrawer={false} />
        </HStack>
      </Container>
    </Flex>
  );
};

export default Footer;
