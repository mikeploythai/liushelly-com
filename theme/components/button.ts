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
      bgColor: "brand.navy",
      color: "brand.lavender",

      _hover: {
        bgImage: "linear-gradient(rgb(0 0 0/12.5%) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(rgb(0 0 0/25%) 0 0)",
        textDecor: "unset",
      },
    },
    secondary: {
      bgColor: "brand.lavender",
      color: "brand.navy",

      _hover: {
        bgImage: "linear-gradient(rgb(0 0 0/12.5%) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(rgb(0 0 0/25%) 0 0)",
        textDecor: "unset",
      },
    },
    ghost: {
      color: "brand.navy",

      _hover: {
        bgImage: "linear-gradient(rgb(0 0 0/12.5%) 0 0)",
        textDecor: "unset",
      },
      _active: {
        bgImage: "linear-gradient(rgb(0 0 0/25%) 0 0)",
        textDecor: "unset",
      },
    },
  },
  defaultProps: { size: "md", variant: "primary" },
};

export default Button;
