import type { ComponentType } from "react";
import type { DocumentDefinition } from "sanity";
import type {
  StructureBuilder,
  StructureResolverContext,
} from "sanity/structure";

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default function buildOrderables(
  docs: DocumentDefinition[],
  S: StructureBuilder,
  context: StructureResolverContext,
) {
  let orderedDocs = [];

  for (const doc of docs) {
    orderedDocs.push(
      orderableDocumentListDeskItem({
        title: doc.title ?? doc.name,
        id: doc.name,
        type: doc.name,
        icon: (doc.icon as ComponentType) ?? undefined,
        S,
        context,
      }),
    );
  }

  return orderedDocs;
}
