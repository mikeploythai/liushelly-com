import { Link } from "@chakra-ui/next-js";
import {
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaEquals } from "react-icons/fa";
import NavDrawer from "./drawer";
import NavRoutes from "./routes";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalFocusRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      as="nav"
      pos="sticky"
      top={0}
      w="full"
      justify="center"
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
          as="ul"
          display={{ base: "none", sm: "inline-flex" }}
          spacing={0}
          pr={2.5}
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
      </Container>

      <NavDrawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalFocusRef}
        children={undefined}
      />
    </Flex>
  );
};

export default NavBar;
