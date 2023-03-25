const Button = {
  baseStyle: {
    fontWeight: "semibold",
    textTransform: "uppercase",

    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  sizes: {
    xs: { fontSize: "0.625rem", p: 2 },
    sm: { fontSize: "xs", p: 2.5 },
    md: { fontSize: "md", p: 3.5 },
    lg: { fontSize: "lg", p: 4 },
  },
  variants: {
    primary: {
      bgColor: "brand.dark",
      color: "brand.light",

      _hover: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-200) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-300) 0 0)",
        textDecor: "unset",
      },
    },
    secondary: {
      bgColor: "brand.light",
      color: "brand.dark",

      _hover: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-200) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-300) 0 0)",
        textDecor: "unset",
      },
    },
    ghost: {
      color: "brand.dark",

      _hover: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-200) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-300) 0 0)",
        textDecor: "unset",
      },
    },
  },
  defaultProps: { size: "md", variant: "primary" },
};

export default Button;
