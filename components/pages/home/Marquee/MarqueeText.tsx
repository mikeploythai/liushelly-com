import expertise from "@/lib/data/marqueeTextData";
import { Heading, HStack, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MarqueeText = ({ paused, delay }: { paused: string; delay?: string }) => {
  const move = keyframes`
    0% { transform: translateX(0); },
    100% { transform: translateX(-100.6%); }
  `;

  const animation = `${move} 30s linear infinite`;

  return (
    <HStack
      as={motion.div}
      animation={animation}
      opacity={{ base: 1, sm: "80%" }}
      transition="200ms ease-in-out"
      transitionDelay={delay}
      _groupHover={{ animationPlayState: paused, opacity: 1 }}
    >
      {expertise.map(({ title }, index) => {
        return (
          <Heading
            key={index}
            size="sm"
            variant="secondary"
            whiteSpace="nowrap"
          >
            {title}
          </Heading>
        );
      })}
    </HStack>
  );
};

export default MarqueeText;
