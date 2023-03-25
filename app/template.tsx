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
        <VStack minH="100vh" justify="space-between" spacing={0}>
          <NavBar />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            style={{ width: "100%" }}
          >
            {children}
          </motion.div>
          <Footer />
        </VStack>
      </ChakraBaseProvider>
    </CacheProvider>
  );
};

export default Template;
