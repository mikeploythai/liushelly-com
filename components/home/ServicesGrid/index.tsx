import Cards from "@/components/general/Cards";
import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";
import servicesData from "./data.json";

const ServicesGrid = () => {
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
          Personalized services to skyrocket your socials.
        </Heading>

        <SimpleGrid columns={[1, 3]} gap={4} w="full">
          <Cards data={servicesData} />
        </SimpleGrid>

        <Button
          as={Link}
          size="sm"
          w="full"
          rightIcon={<FaAngleDoubleRight />}
          href="/services"
        >
          Explore all services
        </Button>
      </Container>
    </Flex>
  );
};

export default ServicesGrid;
