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
        spacing={0}
        gap={4}
      >
        <VStack>
          <Heading
            size="xl"
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
          <Card variant="form">
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
