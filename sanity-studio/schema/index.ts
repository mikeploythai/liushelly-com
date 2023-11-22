import type { SchemaTypeDefinition } from "sanity";

import aboutMe from "./about-me";
import portfolio from "./portfolio";
import services from "./services";
import announcement from "./announcement";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [aboutMe, announcement, services, portfolio],
};
