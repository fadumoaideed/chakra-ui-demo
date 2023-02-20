import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import fonts from "./fonts";
import fontSizes from "./fontSizes";
import fontWeights from "./fontWeights";
import Button from "./componentStyles/Button";

const config: ThemeConfig = {
  initialColorMode: "light", // The initial mode you'd like your app to start with
  useSystemColorMode: false, // change color mode based on the user's system preferences.
};

const customTheme = extendTheme({
  config,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  colors,

  components: { Button },
});

export default customTheme;
