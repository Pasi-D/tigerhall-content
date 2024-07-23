import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        background: "",
        color: "white",
      },
    }),
  },
  fonts: {
    heading: "var(--font-pp)",
    body: "var(--font-pp)",
  },
  config,
});
