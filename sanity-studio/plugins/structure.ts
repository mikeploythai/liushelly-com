import type { DocumentDefinition } from "sanity";
import type { StructureResolver } from "sanity/desk";

import aboutMe from "sanity-studio/schema/about-me";
import announcement from "sanity-studio/schema/announcement";
import portfolio from "sanity-studio/schema/portfolio";
import services from "sanity-studio/schema/services";
import buildOrderables from "./build-orderables";
import buildSingletons from "./build-singletons";

const singletons: DocumentDefinition[] = [aboutMe, announcement];
const orderables: DocumentDefinition[] = [services, portfolio];
const hidden = [aboutMe.name, announcement.name, services.name, portfolio.name];

const structure: StructureResolver = (S, context) => {
  const singletonItems = buildSingletons(singletons, S);
  const orderableItems = buildOrderables(orderables, S, context);
  const defaultItems = S.documentTypeListItems().filter(
    (doc) => !(hidden as string[]).includes(doc.getId()!),
  );

  return S.list()
    .title("Content")
    .items([
      ...singletonItems,
      S.divider(),
      ...orderableItems,
      ...defaultItems,
    ]);
};

export default structure;
