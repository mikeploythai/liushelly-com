import type { StructureResolver } from "sanity/desk";

import aboutMe from "sanity-studio/schema/about-me";
import announcement from "sanity-studio/schema/announcement";
import home from "sanity-studio/schema/home";
import portfolio from "sanity-studio/schema/portfolio";
import services from "sanity-studio/schema/services";
import buildOrderables from "./build-orderables";
import buildSingletons from "./build-singletons";

const singletons = [home, aboutMe, announcement];
const orderables = [services, portfolio];
const hidden = [
  home.name,
  aboutMe.name,
  announcement.name,
  services.name,
  portfolio.name,
];

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
      S.divider(),
      ...defaultItems,
    ]);
};

export default structure;
