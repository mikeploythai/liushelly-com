import { TestimonialContentProps } from "@/lib/types/testimonialProps";
import { Text, VStack } from "@chakra-ui/react";

const TestimonialContent = ({
  testimonial,
  transitionTime,
}: {
  testimonial: TestimonialContentProps;
  transitionTime: number;
}) => {
  const data = testimonial.data;
  const index = testimonial.index;

  return (
    <VStack
      pos="absolute"
      spacing={4}
      opacity={testimonial.opacity}
      transition={`${transitionTime}ms ease-in-out`}
    >
      <Text fontSize="sm" variant="secondary">
        {data[index].comment}
      </Text>

      <Text fontSize="sm" variant="secondary" fontWeight="semibold">
        {data[index].name}, {data[index].role}
      </Text>
    </VStack>
  );
};

export default TestimonialContent;
