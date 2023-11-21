import type { DocumentDefinition } from "sanity";
import type { StructureResolver } from "sanity/desk";

import portfolio from "sanity-studio/schema/portfolio";
import services from "sanity-studio/schema/services";
import buildOrderables from "./build-orderables";

const orderables: DocumentDefinition[] = [services, portfolio];
const hiddenItems = [services.name, portfolio.name];

const structure: StructureResolver = (S, context) => {
  const orderableItems = buildOrderables(orderables, S, context);
  const defaultItems = S.documentTypeListItems().filter(
    (doc) => !(hiddenItems as string[]).includes(doc.getId()!),
  );

  return S.list()
    .title("Content")
    .items([...orderableItems, ...defaultItems]);
};

export default structure;
