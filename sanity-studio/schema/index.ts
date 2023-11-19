import type { SchemaTypeDefinition } from "sanity";

import portfolio from "./portfolio";
import services from "./services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, portfolio],
};
