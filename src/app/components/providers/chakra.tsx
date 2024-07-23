"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";

interface ChakraProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ChakraProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Provider;
