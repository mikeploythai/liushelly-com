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
    primary: { color: "brand.dark" },
    secondary: { color: "brand.light" },
  },
  defaultProps: { size: "md", variant: "primary" },
};

export const Text = {
  baseStyle: { fontWeight: "medium" },
  variants: {
    primary: { color: "brand.dark" },
    secondary: { color: "brand.light" },
  },
};
