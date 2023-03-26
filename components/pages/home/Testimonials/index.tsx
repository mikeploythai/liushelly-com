import {
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import TestimonialContent from "./TestimonialContent";
import TestimonialLogic from "./TestimonialLogic";

const Testimonials = () => {
  const { testimonials, transitionTime, handlePrev, handleNext } =
    TestimonialLogic();

  return (
    <Flex as="section" w="full" justify="center" bgColor="brand.dark">
      <Container
        as={VStack}
        maxW={{ base: "container.sm", md: "container.md" }}
        w="full"
        p={4}
        spacing={{ base: 4, sm: 0 }}
      >
        <HStack as="header" w="full" justify="space-between">
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

        <Flex
          pos="relative"
          minH={{ base: "unset", sm: 72 }}
          w="full"
          justify="center"
          align={{ base: "start", sm: "center" }}
          textAlign={{ base: "start", sm: "center" }}
        >
          <TestimonialContent
            testimonial={testimonials.odd}
            transitionTime={transitionTime}
          />

          <TestimonialContent
            testimonial={testimonials.even}
            transitionTime={transitionTime}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Testimonials;
