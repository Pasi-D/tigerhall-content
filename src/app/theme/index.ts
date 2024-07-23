import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        background: "#151617",
        color: "white",
      },
    }),
  },
  fonts: {
    heading: "var(--font-pp)",
    body: "var(--font-pp)",
  },
  colors: {
    brand: {
      primary: "#FF5900",
    },
  },
  config,
});
