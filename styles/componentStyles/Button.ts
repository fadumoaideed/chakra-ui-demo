import {
  DeepPartial,
  ComponentStyleConfig,
  defineStyleConfig,
} from "@chakra-ui/react";

const Button: DeepPartial<ComponentStyleConfig> = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    //  borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 8,
      py: 5,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "teal.700",
      color: "teal.600",
    },
    solid: {
      bg: "teal.600",
      color: "teal.50",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export default Button;
