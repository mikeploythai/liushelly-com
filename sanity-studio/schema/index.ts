import type { SchemaTypeDefinition } from "sanity";

import aboutMe from "./about-me";
import announcement from "./announcement";
import home from "./home";
import portfolio from "./portfolio";
import services from "./services";

const singletons = [home, aboutMe, announcement];
const orderables = [services, portfolio];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...singletons, ...orderables],
};
