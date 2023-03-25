import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaEquals } from "react-icons/fa";
import NavDrawer from "./NavDrawer";
import NavRoutes from "./NavRoutes";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalFocusRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);
  const path = usePathname();

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
        as="nav"
        display="flex"
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
          textTransform="unset"
          loadingText="Shelly Liu"
          isLoading={loading}
          spinnerPlacement="end"
          onClick={() =>
            path !== "/" ? setLoading(true) : window.scrollTo(0, 0)
          }
        >
          Shelly Liu
        </Button>

        <HStack
          as={UnorderedList}
          display={{ base: "none", sm: "inline-flex" }}
          pr={2.5}
          spacing={0}
        >
          <NavRoutes size="sm" />
        </HStack>

        <IconButton
          ref={finalFocusRef}
          display={{ base: "inline-flex", sm: "none" }}
          icon={<FaEquals />}
          aria-label="Open navigation menu"
          size="lg"
          h="full"
          p={4}
          onClick={onOpen}
        />
      </Container>

      <NavDrawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalFocusRef}
      >
        <VStack as="nav" align="start">
          <NavRoutes size="lg" onClose={onClose} />
        </VStack>
      </NavDrawer>
    </Flex>
  );
};

export default NavBar;
