import CardList from "@/components/common/CardList";
import { Link } from "@chakra-ui/next-js";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const ServicesGrid = () => {
  return (
    <VStack
      as="section"
      maxW={{ base: "container.md", md: "container.lg" }}
      w="full"
      p={4}
      spacing={4}
    >
      <Heading size={{ base: "md", sm: "lg" }}>
        Personalized services to skyrocket your socials.
      </Heading>

      <CardList maxColumns={3} />

      <Button
        as={Link}
        href="/services"
        size="sm"
        w="full"
        rightIcon={<FaAngleDoubleRight />}
      >
        Explore all services
      </Button>
    </VStack>
  );
};

export default ServicesGrid;
