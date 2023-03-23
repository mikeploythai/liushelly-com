import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaEquals } from "react-icons/fa";
import NavDrawer from "./NavDrawer";
import NavRoutes from "./NavRoutes";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalFocusRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      as="header"
      pos="sticky"
      top={0}
      w="full"
      justify="center"
      bgColor="brand.light"
      borderBottom="1px solid"
      zIndex="sticky"
    >
      <Container
        as={HStack}
        maxW="container.lg"
        w="full"
        justifyContent="space-between"
      >
        <Button
          as={Link}
          href="/"
          variant="ghost"
          size="lg"
          fontFamily="Unbounded"
          fontWeight="bold"
          textTransform="unset"
        >
          Shelly Liu
        </Button>

        <HStack
          as="nav"
          display={{ base: "none", sm: "inline-flex" }}
          pr={2.5}
          spacing={0}
        >
          <NavRoutes size="sm" />
        </HStack>

        <IconButton
          display={{ base: "inline-flex", sm: "none" }}
          icon={<FaEquals />}
          aria-label="Open navigation menu"
          size="lg"
          h="full"
          p={4}
          onClick={onOpen}
          ref={finalFocusRef}
        />

        <NavDrawer
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={finalFocusRef}
        >
          <VStack as="nav" align="start">
            <NavRoutes size="lg" onClose={onClose} />
          </VStack>
        </NavDrawer>
      </Container>
    </Flex>
  );
};

export default NavBar;