"use client";

import ContactForm from "@/components/contact/form";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex as="section" w="full" justify="center">
      <Container
        as={VStack}
        maxW="container.sm"
        w="full"
        p={4}
        spacing={{ base: 4, sm: 0 }}
      >
        <VStack
          display="flex"
          minH={{ base: "unset", sm: "2xs" }}
          w="full"
          justify="center"
          spacing={{ base: 1, sm: 4 }}
        >
          <Heading
            size={{ base: "lg", sm: "xl" }}
            w="full"
            textAlign={{ base: "start", sm: "center" }}
          >
            Let&apos;s chat!
          </Heading>

          <Text fontSize="sm" textAlign={{ base: "start", sm: "center" }}>
            Feel free to reach out to me anytime via the form below or via
            contact(at)liushelly.com! I&apos;ll do my best to respond as soon as
            I can :)
          </Text>
        </VStack>

        <Box w="full" pr={2} pb={2}>
          <Card variant="shadow">
            <CardBody>
              <ContactForm />
            </CardBody>
          </Card>
        </Box>
      </Container>
    </Flex>
  );
};

export default Contact;
