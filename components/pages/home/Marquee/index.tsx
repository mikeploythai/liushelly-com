import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import MarqueeText from "./MarqueeText";

const Marquee = () => {
  const [paused, setPaused] = useState("unset");
  const marqueeRole = useBreakpointValue({ base: "marquee", sm: "group" });

  return (
    <Flex
      as="section"
      w="full"
      justify="center"
      overflow="hidden"
      bgColor="brand.dark"
    >
      <Container
        as={Flex}
        role={marqueeRole}
        pos="relative"
        maxW="container.lg"
        p={4}
        gap={2}
        overflow="hidden"
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
