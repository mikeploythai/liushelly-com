import type { DocumentDefinition } from "sanity";
import type { StructureBuilder } from "sanity/structure";

import itemViews from "../item-views";

export default function buildSingletons(
  docs: DocumentDefinition[],
  S: StructureBuilder,
) {
  let singletonDocs = [];

  for (const doc of docs) {
    singletonDocs.push(
      S.listItem()
        .title(doc.title ?? doc.name)
        .icon(doc.icon)
        .child(
          S.editor()
            .schemaType(doc.name)
            .documentId(doc.name)
            .views(itemViews(doc.name, S)),
        ),
    );
  }

  return singletonDocs;
}
