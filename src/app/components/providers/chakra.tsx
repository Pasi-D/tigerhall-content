"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";

interface ChakraWrapperProps {
  children: React.ReactNode;
}

const ChakraWrapper: React.FC<ChakraWrapperProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraWrapper;
