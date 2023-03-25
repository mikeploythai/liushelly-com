export const Card = {
  baseStyle: {
    container: {
      w: "full",

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

      _groupHover: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-200) 0 0)",
      },
      _groupActive: {
        bgImage: "linear-gradient(var(--chakra-colors-blackAlpha-300) 0 0)",
      },
    },
  },
  variants: {
    interactive: {
      container: { border: "1px solid" },
      body: {
        filter: "auto",

        _hover: { brightness: "92%" },
        _active: { brightness: "84%" },
        _groupHover: { brightness: "92%" },
        _groupActive: { brightness: "84%" },
      },
    },
    "interactive-secondary": {
      container: { border: "1px solid", borderColor: "brand.light" },
      body: {
        filter: "auto",

        _hover: { brightness: "92%" },
        _active: { brightness: "84%" },
        _groupHover: { brightness: "92%" },
        _groupActive: { brightness: "84%" },
      },
      footer: { bgColor: "brand.light", color: "brand.dark" },
    },
    shadow: {
      container: {
        border: "1px solid",
        shadow: ".5rem .5rem 0 var(--chakra-colors-brand-dark)",
        transition: "200ms ease-in-out",

        _groupHover: {
          shadow: ".75rem .75rem 0 var(--chakra-colors-brand-dark)",
        },
      },
      body: { p: 4, bgColor: "brand.light" },
    },
  },
  sizes: {
    sm: {
      body: { minH: 28, h: "full" },
    },
    md: {
      body: { minH: 36, h: "full" },
    },
  },
};
