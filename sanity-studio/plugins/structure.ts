import type { StructureResolver } from "sanity/structure";

import { orderables, singletons } from "sanity-studio/schema";
import buildOrderables from "./builders/orderables";
import buildSingletons from "./builders/singletons";

let hidden: string[] = ["media.tag"];
singletons.forEach(({ name }) => hidden.push(name));
orderables.forEach(({ name }) => hidden.push(name));

const structure: StructureResolver = (S, context) => {
  const singletonItems = buildSingletons(singletons, S);
  const orderableItems = buildOrderables(orderables, S, context);
  const defaultItems = S.documentTypeListItems().filter(
    (doc) => !hidden.includes(doc.getId()!),
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
