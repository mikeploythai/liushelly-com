export const FormLabel = {
  baseStyle: {
    fontWeight: "semibold",
    fontSize: "sm",
  },
};

export const Input = {
  baseStyle: {
    field: {
      px: 3,
      py: 2,
      fontSize: "sm",
      fontWeight: "medium",
      bgColor: "brand.white",
      border: "1px solid",
      borderColor: "brand.navy",
      borderRadius: 0,
      _focusVisible: {
        outlineStyle: "solid",
        outlineOffset: "-4px",
        outlineColor: "brand.navy",
      },
      _invalid: {
        borderColor: "red.500",
        _focusVisible: {
          outlineStyle: "solid",
          outlineOffset: "-4px",
          outlineColor: "red.500",
        },
      },
    },
  },
};

export const Textarea = {
  baseStyle: {
    px: 3,
    py: 2,
    fontSize: "sm",
    fontWeight: "medium",
    bgColor: "brand.white",
    border: "1px solid",
    borderColor: "brand.navy",
    borderRadius: 0,
    _focusVisible: {
      outlineStyle: "solid",
      outlineOffset: "-4px",
      outlineColor: "brand.navy",
    },
    _invalid: {
      borderColor: "red.500",
      _focusVisible: {
        outlineStyle: "solid",
        outlineOffset: "-4px",
        outlineColor: "red.500",
      },
    },
  },
};
