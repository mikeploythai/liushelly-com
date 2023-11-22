import type { SchemaTypeDefinition } from "sanity";

import aboutMe from "./about-me";
import portfolio from "./portfolio";
import services from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutMe, services, portfolio],
};
