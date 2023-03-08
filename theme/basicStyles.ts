import "@fontsource/montserrat/variable.css";
import "@fontsource/unbounded/700.css";

export const styles = {
  global: {
    body: { bg: "brand.lavender", color: "brand.navy" },
    li: { listStyleType: "none" },
    a: {
      _hover: { textDecor: "underline" },
    },
  },
};

export const colors = {
  brand: { lavender: "#d2cbff", navy: "#242f78" },
};

export const fonts = { heading: "Unbounded", body: "MontserratVariable" };
