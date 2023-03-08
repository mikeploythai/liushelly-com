import {
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import testimonialData from "./data.json";

const Testimonials = () => {
  const [currIndex, setIndex] = useState(0);
  const currData = testimonialData[currIndex];

  const handlePrev = () => {
    if (currData === testimonialData[0]) setIndex(testimonialData.length - 1);
    else setIndex(currIndex - 1);
  };

  const handleNext = () => {
    if (currData === testimonialData[testimonialData.length - 1]) setIndex(0);
    else setIndex(currIndex + 1);
  };

  return (
    <Flex as="section" w="full" justify="center" bgColor="brand.dark">
      <Container
        as={VStack}
        maxW={{ base: "container.sm", md: "container.md" }}
        w="full"
        p={4}
        spacing={{ base: 4, sm: 0 }}
      >
        <HStack w="full" justify="space-between">
          <Heading size={{ base: "md", sm: "lg" }} variant="secondary">
            What others are saying.
          </Heading>

          <ButtonGroup>
            <IconButton
              icon={<FaAngleDoubleLeft />}
              aria-label="Previous testimonial"
              size="md"
              h="full"
              p={2.5}
              onClick={handlePrev}
            />

            <IconButton
              icon={<FaAngleDoubleRight />}
              aria-label="Next testimonial"
              size="md"
              h="full"
              p={2.5}
              onClick={handleNext}
            />
          </ButtonGroup>
        </HStack>

        <VStack
          minH={{ base: "unset", sm: 72 }}
          align={{ base: "start", sm: "center" }}
          justify="center"
          textAlign={{ base: "start", sm: "center" }}
          spacing={{ base: 4, sm: 8 }}
        >
          <Text fontSize="sm" variant="secondary">
            “{currData.comment}”
          </Text>

          <Text fontSize="sm" variant="secondary" fontWeight="semibold">
            {currData.name}, {currData.role}
          </Text>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Testimonials;
