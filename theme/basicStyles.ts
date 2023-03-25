import "@fontsource/montserrat/variable.css";
import "@fontsource/unbounded/700.css";

export const styles = {
  global: {
    html: { scrollBehavior: "smooth" },
    body: { bg: "brand.light", color: "brand.dark" },
    li: { listStyleType: "none" },
    a: {
      _hover: { textDecor: "underline" },
    },
  },
};

export const colors = {
  brand: { light: "#d2cbff", dark: "#242f78" },
};

export const fonts = { heading: "Unbounded", body: "MontserratVariable" };
