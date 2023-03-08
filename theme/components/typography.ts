export const Heading = {
  baseStyle: { fontFamily: "Unbounded" },
  sizes: {
    xs: { fontSize: "0.625rem" },
    sm: { fontSize: "xs" },
    md: { fontSize: "md" },
    lg: { fontSize: "lg" },
    xl: { fontSize: "2xl" },
  },
  variants: {
    primary: { color: "brand.navy" },
    secondary: { color: "brand.lavender" },
  },
  defaultProps: { size: "md", variant: "primary" },
};

export const Text = {
  baseStyle: { fontWeight: "medium" },
  variants: {
    primary: { color: "brand.navy" },
    secondary: { color: "brand.lavender" },
  },
};
