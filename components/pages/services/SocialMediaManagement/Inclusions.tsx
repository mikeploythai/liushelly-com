import servicesData from "@/lib/data/servicesData";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Inclusions = ({ isModal = false }: { isModal?: boolean }) => {
  const inclusionList = servicesData[0].inclusions;

  return (
    <Accordion
      w="full"
      borderColor={isModal ? "brand.light" : "brand.dark"}
      allowToggle
    >
      <AccordionItem>
        <AccordionButton
          transition="unset"
          _hover={{ bg: "var(--chakra-colors-blackAlpha-200)" }}
          _active={{ bg: "var(--chakra-colors-blackAlpha-300)" }}
        >
          <Text
            variant={isModal ? "secondary" : "primary"}
            fontSize="sm"
            fontWeight="semibold"
            flex="1"
            align="left"
          >
            All packages include...
          </Text>

          <AccordionIcon color={isModal ? "brand.light" : "brand.dark"} />
        </AccordionButton>

        <AccordionPanel
          as={UnorderedList}
          m={0}
          fontSize="sm"
          fontWeight="medium"
          color={isModal ? "brand.light" : "brand.dark"}
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
  );
};

export default Inclusions;
