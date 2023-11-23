import type { SchemaTypeDefinition } from "sanity";

import links from "./document/links";
import portfolio from "./orderables/portfolio";
import services from "./orderables/services";
import socials from "./orderables/socials";
import aboutMe from "./singletons/about-me";
import announcement from "./singletons/announcement";
import home from "./singletons/home";

export const singletons = [home, aboutMe, announcement];
export const orderables = [services, portfolio, socials];
const documents = [links];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...singletons, ...orderables, ...documents],
};
