import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#fbc002",
    },
    brown: {
      "900": "#1c120d",
      "800": "#2b160d",
    },
    blue: {
      "100": "#4aacc9",
      "200": "#1f92b8",
    },
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
