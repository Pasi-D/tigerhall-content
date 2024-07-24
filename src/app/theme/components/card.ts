import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys,
);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "#ffffff",
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: "8px",
    },
  }),
};

const cardTheme = defineMultiStyleConfig({ baseStyle, sizes });

export default cardTheme;
