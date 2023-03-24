"use client";

import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraBaseProvider, VStack } from "@chakra-ui/react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme} resetCSS>
        <VStack minH="100vh" justify="space-between" spacing={0}>
          <NavBar />
          {children}
          <Footer />
        </VStack>
      </ChakraBaseProvider>
    </CacheProvider>
  );
};

export default Template;
