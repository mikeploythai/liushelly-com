"use client";

import Footer from "@/components/general/Footer";
import NavBar from "@/components/general/NavBar";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraBaseProvider, VStack } from "@chakra-ui/react";

const Client = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraBaseProvider theme={theme} resetCSS>
        <VStack
          minH="100vh"
          w="full"
          justify="space-between"
          align="center"
          spacing={0}
        >
          <NavBar />
          {children}
          <Footer />
        </VStack>
      </ChakraBaseProvider>
    </CacheProvider>
  );
};

export default Client;
