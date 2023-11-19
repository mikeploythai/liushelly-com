import { type SchemaTypeDefinition } from "sanity";
import portfolio from "./portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolio],
};
