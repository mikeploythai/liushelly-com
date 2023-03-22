import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import SocialLinks from "../SocialLinks";

const NavDrawer = ({
  isOpen,
  onClose,
  finalFocusRef,
  children,
}: DrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
      placement="right"
    >
      <DrawerOverlay display={{ base: "flex", sm: "none" }} />

      <DrawerContent display={{ base: "flex", sm: "none" }} bg="brand.dark">
        <DrawerHeader
          as={HStack}
          justifyContent="space-between"
          p={0}
          borderBottom="1px solid"
          borderBottomColor="brand.light"
        >
          <Heading variant="secondary" size="lg" p={4}>
            Navigation
          </Heading>

          <IconButton
            icon={<FaTimes />}
            aria-label="Close navigation menu"
            variant="secondary"
            size="lg"
            h="full"
            p={4}
            onClick={onClose}
          />
        </DrawerHeader>

        <DrawerBody as={Flex} alignItems="center" px={4} py={0}>
          {children}
        </DrawerBody>

        <DrawerFooter as="ul" justifyContent="center" p="0 1rem 1rem">
          <SocialLinks isDrawer={true} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
