export const Card = {
  baseStyle: {
    container: {
      w: "full",
      border: "1px solid",
      borderColor: "brand.dark",

      _hover: { textDecor: "none" },
    },
    body: { bgColor: "brand.light" },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      p: 2.5,
      bgColor: "brand.dark",
      color: "brand.light",
      fontSize: "xs",
      fontWeight: "semibold",
      textTransform: "uppercase",

      _groupHover: { bgImage: "linear-gradient(rgb(0 0 0/15%) 0 0)" },
      _groupActive: { bgImage: "linear-gradient(rgb(0 0 0/30%) 0 0)" },
    },
  },
  variants: {
    shadow: {
      container: {
        transition: "200ms ease-in-out",
        shadow: ".5rem .5rem 0 var(--chakra-colors-brand-dark)",
        _hover: { shadow: ".75rem .75rem 0 var(--chakra-colors-brand-dark)" },
      },
      body: { p: 4 },
    },
  },
  sizes: {
    sm: {
      body: { minH: 28, h: "full" },
    },
    md: {
      body: { minH: 40, h: "full" },
    },
  },
  defaultProps: { size: "md" },
};

export const Badge = {
  baseStyle: {
    ml: 2.5,
    p: "0.1875rem 0.375rem",
    fontSize: "0.5rem",
    color: "brand.dark",
    bgColor: "brand.light",
  },
};
