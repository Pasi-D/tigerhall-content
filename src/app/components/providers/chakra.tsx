"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Provider;
