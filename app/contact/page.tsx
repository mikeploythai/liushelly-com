"use client";

import ContactForm from "@/components/pages/contact/Form";
import { Box, Card, CardBody, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack
      as="section"
      maxW="container.sm"
      w="full"
      p={{ base: 4, sm: "4rem 1rem" }}
      spacing={{ base: 4, sm: 16 }}
    >
      <VStack align={{ base: "start", sm: "center" }}>
        <Heading size={{ base: "lg", sm: "xl" }}>Let&apos;s chat!</Heading>

        <Text fontSize="sm" textAlign={{ base: "start", sm: "center" }}>
          Feel free to reach out to me anytime via the form below or via
          contact(at)liushelly.com! I&apos;ll do my best to respond as soon as I
          can :)
        </Text>
      </VStack>

      <Box pr={2} pb={2}>
        <Card variant="shadow">
          <CardBody>
            <ContactForm />
          </CardBody>
        </Card>
      </Box>
    </VStack>
  );
};

export default Contact;
