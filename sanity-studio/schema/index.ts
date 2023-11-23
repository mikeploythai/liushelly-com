import type { SchemaTypeDefinition } from "sanity";

import aboutMe from "./singletons/about-me";
import announcement from "./singletons/announcement";
import home from "./singletons/home";
import portfolio from "./orderables/portfolio";
import services from "./orderables/services";
import socials from "./orderables/socials";

export const singletons = [home, aboutMe, announcement];
export const orderables = [services, portfolio, socials];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...singletons, ...orderables],
};
