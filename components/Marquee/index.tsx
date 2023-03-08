import {
  Box,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import MarqueeText from "./text";

const Marquee = () => {
  const marqueeRole = useBreakpointValue({ base: "marquee", sm: "group" });
  const [paused, setPaused] = useState("unset");

  return (
    <Flex w="full" justify="center" overflow="hidden" bgColor="brand.dark">
      <Container
        pos="relative"
        role={marqueeRole}
        as={HStack}
        maxW="container.lg"
        overflow="hidden"
        p={4}
        spacing={0}
        gap={2}
        onMouseEnter={() => setPaused("paused")}
        onMouseLeave={() => setPaused("unset")}
      >
        <MarqueeText paused={paused} />
        <MarqueeText paused={paused} delay="-3s" />
        <Box
          pos="absolute"
          left={0}
          h="full"
          w="10%"
          bgGradient="linear(to-r, brand.dark, transparent)"
        />
        <Box
          pos="absolute"
          right={0}
          h="full"
          w="10%"
          bgGradient="linear(to-l, brand.dark, transparent)"
        />
      </Container>
    </Flex>
  );
};

export default Marquee;
