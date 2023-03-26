import testimonialData from "@/lib/data/testimonialData";
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

const Testimonials = () => {
  const [currIndex, setIndex] = useState({ odd: 0, even: 0 });
  const oddData = testimonialData.filter(({}, index) => index % 2 === 0);
  const evenData = testimonialData.filter(({}, index) => index % 2 !== 0);

  const [visible, setVisible] = useState({ odd: 1, even: 0 });
  const transitionTime = 200;

  const handlePrev = () => {
    if (visible.odd === 1) {
      setVisible({ odd: 0, even: 1 });

      if (evenData[currIndex.even] === evenData[0]) {
        setIndex((prevState) => ({
          ...prevState,
          even: evenData.length - 1,
        }));
      } else {
        setIndex((prevState) => ({
          ...prevState,
          even: currIndex.even - 1,
        }));
      }
    } else {
      setVisible({ odd: 1, even: 0 });

      if (oddData[currIndex.odd] === oddData[0]) {
        setIndex((prevState) => ({
          ...prevState,
          odd: oddData.length - 1,
        }));
      } else {
        setIndex((prevState) => ({
          ...prevState,
          odd: currIndex.odd - 1,
        }));
      }
    }
  };

  const handleNext = () => {
    if (visible.odd === 1) {
      setVisible({ odd: 0, even: 1 });

      setTimeout(() => {
        if (oddData[currIndex.odd] === oddData[oddData.length - 1]) {
          setIndex((prevState) => ({
            ...prevState,
            odd: 0,
          }));
        } else {
          setIndex((prevState) => ({
            ...prevState,
            odd: currIndex.odd + 1,
          }));
        }
      }, transitionTime);
    } else {
      setVisible({ odd: 1, even: 0 });

      setTimeout(() => {
        if (evenData[currIndex.even] === evenData[evenData.length - 1]) {
          setIndex((prevState) => ({
            ...prevState,
            even: 0,
          }));
        } else {
          setIndex((prevState) => ({
            ...prevState,
            even: currIndex.even + 1,
          }));
        }
      }, transitionTime);
    }
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
          justify="center"
          align={{ base: "start", sm: "center" }}
          textAlign={{ base: "start", sm: "center" }}
        >
          <VStack
            spacing={4}
            opacity={visible.odd}
            transition={`${transitionTime}ms ease-in-out`}
          >
            <Text fontSize="sm" variant="secondary">
              “{oddData[currIndex.odd].comment}”
            </Text>

            <Text fontSize="sm" variant="secondary" fontWeight="semibold">
              {oddData[currIndex.odd].name}, {oddData[currIndex.odd].role}
            </Text>
          </VStack>

          <VStack
            pos="absolute"
            spacing={4}
            opacity={visible.even}
            transition={`${transitionTime}ms ease-in-out`}
          >
            <Text fontSize="sm" variant="secondary">
              “{evenData[currIndex.even].comment}”
            </Text>

            <Text fontSize="sm" variant="secondary" fontWeight="semibold">
              {evenData[currIndex.even].name}, {evenData[currIndex.even].role}
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Testimonials;
