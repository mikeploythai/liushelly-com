"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import theme from "@/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraBaseProvider, VStack } from "@chakra-ui/react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
};

export default RootLayout;
