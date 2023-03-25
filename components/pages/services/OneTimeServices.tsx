import CardList from "@/components/common/CardList";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const OneTimeServices = () => {
  return (
    <VStack
      as="section"
      w="full"
      justify="center"
      spacing={0}
      bgColor="brand.dark"
    >
      <Container
        as={VStack}
        maxW="container.lg"
        w="full"
        p={{ base: 4, sm: "2rem 1rem" }}
        spacing={{ base: 4, md: 8 }}
      >
        <VStack maxW="container.md" justify="center">
          <Heading
            size={{ base: "md", sm: "lg" }}
            variant="secondary"
            textAlign={{ base: "start", sm: "center" }}
          >
            Not ready for social media management?
          </Heading>

          <Text
            variant="secondary"
            fontSize="sm"
            textAlign={{ base: "start", sm: "center" }}
          >
            My one-time services are the perfect solution! Whether you need an
            expert opinion or just a little guidance, I&apos;m here to help you
            make the best decisions for your business without the long-term
            commitment.
          </Text>
        </VStack>

        <CardList maxColumns={2} servicesPage={true} />
      </Container>
    </VStack>
  );
};

export default OneTimeServices;
