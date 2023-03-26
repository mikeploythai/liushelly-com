"use client";

import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraBaseProvider, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme} resetCSS>
        <NavBar />
        <VStack
          as={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          flex={1}
          w="full"
          justify="center"
          spacing={0}
        >
          {children}
        </VStack>
        <Footer />
      </ChakraBaseProvider>
    </CacheProvider>
  );
};

export default Template;
