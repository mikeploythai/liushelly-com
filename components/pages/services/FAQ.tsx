import faqData from "@/lib/data/faqData";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Flex as="section" w="full" justify="center">
      <Container
        as={VStack}
        maxW="container.sm"
        w="full"
        align={{ base: "start", md: "center" }}
        p={4}
        spacing={4}
      >
        <Heading size={{ base: "md", sm: "lg" }}>
          Frequently Asked Questions
        </Heading>

        <Accordion w="full" borderColor="brand.dark" allowToggle>
          {faqData.map(({ question, answer }, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionButton
                  transition="unset"
                  _hover={{ bg: "var(--chakra-colors-blackAlpha-200)" }}
                  _active={{ bg: "var(--chakra-colors-blackAlpha-300)" }}
                >
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    align="left"
                    flex="1"
                  >
                    {question}
                  </Text>

                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel fontSize="sm" fontWeight="medium">
                  {answer}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </Flex>
  );
};

export default FAQ;
