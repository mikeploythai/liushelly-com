import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import "@fontsource/montserrat/variable.css";
import "@fontsource/unbounded/700.css";
import { colors, fonts, styles } from "./basicStyles";
import Button from "./components/button";
import { Badge, Card } from "./components/card";
import { FormLabel, Input, Textarea } from "./components/form";
import { Heading, Text } from "./components/typography";

const { Drawer, Alert, CloseButton, Spinner } = chakraTheme.components;

const theme = extendBaseTheme({
  styles,
  colors,
  fonts,

  components: {
    Heading,
    Text,
    Button,
    Card,
    Badge,
    FormLabel,
    Input,
    Textarea,

    Drawer,
    Alert,
    CloseButton,
    Spinner,
  },
});

export default theme;
