import servicesData from "@/lib/data/servicesData";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Link,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { FaAngleDoubleRight, FaCheckCircle } from "react-icons/fa";

const SocialMediaManagement = () => {
  const inclusionList = servicesData[0].inclusions;

  return (
    <VStack as="section" w="full" justify="center" spacing={0}>
      <Container
        as={VStack}
        maxW="container.sm"
        w="full"
        p={{ base: 4, sm: "4rem 1rem" }}
        spacing={{ base: 4, sm: 16 }}
      >
        <Heading
          size={{ base: "lg", sm: "xl" }}
          textAlign={{ base: "start", sm: "center" }}
        >
          Take your brand&apos;s social media presence to the next level.
        </Heading>

        <Box pr={2} pb={2}>
          <Card variant="shadow">
            <CardBody as={VStack} spacing={4}>
              <Box w="full" h="3xs" border="1px solid" />

              <VStack align="start">
                <Heading size="lg">
                  <u>DONE FOR YOU</u> Social Media Management
                </Heading>

                <Text fontSize="sm">
                  This is my flagship service, where I get hands-on and take
                  charge of your social media platforms!
                  <br></br>
                  <br></br>
                  With four different packages to choose from, you can select
                  the one that&apos;s best suited for your business&apos;s
                  budget and specific needs. Each tier offers different levels
                  of account management, post creation, and audience engagement,
                  ensuring maximum flexibility and customization.
                  <br></br>
                  <br></br>
                  Packages start at $1200/month :)
                </Text>
              </VStack>

              <Accordion w="full" borderColor="brand.dark" allowToggle>
                <AccordionItem>
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
                      All packages include...
                    </Text>

                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    as={UnorderedList}
                    m={0}
                    fontSize="sm"
                    fontWeight="medium"
                  >
                    {inclusionList?.map((text, index) => {
                      return (
                        <ListItem key={index}>
                          <ListIcon as={FaCheckCircle} />
                          {text}
                        </ListItem>
                      );
                    })}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Button
                as={Link}
                href="https://calendly.com/shellyliu/30mindiscoverychat"
                referrerPolicy="strict-origin-when-cross-origin"
                size="sm"
                rightIcon={<FaAngleDoubleRight />}
                w="full"
                isExternal
              >
                Book a call
              </Button>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </VStack>
  );
};

export default SocialMediaManagement;
