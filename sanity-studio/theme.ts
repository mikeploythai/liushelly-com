import { buildLegacyTheme } from "sanity";
import colors from "tailwindcss/colors";

export const theme = buildLegacyTheme({
  // Base
  "--black": colors.slate["950"],
  "--white": colors.violet["200"],
  "--gray-base": colors.slate["500"],
  "--component-bg": colors.slate["950"],

  // Brand
  "--brand-primary": colors.indigo["400"],

  // Default button
  "--default-button-color": colors.indigo["100"],

  // Focus state
  "--focus-color": colors.indigo["400"],
});
