import CardList from "@/components/common/CardList";
import serviceGridData from "@/lib/data/serviceGridData";
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

const ServicesGrid = () => {
  return (
    <Flex as="section" w="full" justify="center">
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
          <CardList data={serviceGridData} />
        </SimpleGrid>

        <Button
          as={Link}
          href="/services"
          size="sm"
          w="full"
          rightIcon={<FaAngleDoubleRight />}
        >
          Explore all services
        </Button>
      </Container>
    </Flex>
  );
};

export default ServicesGrid;
