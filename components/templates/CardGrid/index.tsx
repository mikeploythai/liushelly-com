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

const CardGrid = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <Flex as="section" w="full" justify="center">
      <Container
        as={VStack}
        maxW={{ base: "container.md", md: "container.lg" }}
        w="full"
        p={4}
        spacing={4}
      >
        <Heading size={{ base: "md", sm: "lg" }}>{heading}</Heading>

        <SimpleGrid columns={[1, 3]} gap={4} w="full">
          {children}
        </SimpleGrid>

        {/* Might make the button reusable (ex. LOAD MORE) */}
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

export default CardGrid;
