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
      <DrawerOverlay />

      <DrawerContent bg="brand.dark">
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          p={0}
          gap={2}
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

        <DrawerFooter justifyContent="center" pt={0} px={4} pb={4}>
          <SocialLinks isDrawer={true} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
