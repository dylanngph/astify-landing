import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { palettes } from "./palettes";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({
  config,
  colors: palettes.colors,
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1184px",
      xxl: "1366px",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"Open Sans", sans-serif',
        bg: mode(
          palettes.colors.base.gray[0],
          palettes.colors.base.gray[500]
        )(props),
        WebkitTapHighlightColor: "transparent",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "8px",
      },
      variants: {
        brand: {
          bg: palettes.colors.brand[400],
          _hover: {
            bg: palettes.colors.brand[500],
          },
          _active: {
            bg: palettes.colors.brand[500],
          },
          _disabled: {
            bg: "whiteAlpha.200",
          },
        }
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: palettes.colors.base.neutral[7],
          borderRadius: "20px",
        },
      },
    },
  },
});
