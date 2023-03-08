import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import "@fontsource/montserrat/variable.css";
import "@fontsource/unbounded/700.css";
import { colors, fonts, styles } from "./basicStyles";
import Button from "./components/button";
import { Heading, Text } from "./components/typography";

const { Drawer, Alert, CloseButton } = chakraTheme.components;

const theme = extendBaseTheme({
  styles,
  colors,
  fonts,

  components: {
    Heading,
    Text,
    Button,

    Drawer,
    Alert,
    CloseButton,
  },
});

export default theme;
