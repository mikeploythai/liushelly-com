import type { DefaultDocumentNodeResolver } from "sanity/structure";
import itemViews from "./item-views";

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) =>
  S.document().views(itemViews(schemaType, S));

export default defaultDocumentNode;
