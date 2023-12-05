import type { DefaultDocumentNodeResolver } from "sanity/desk";
import itemViews from "./item-views";

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) =>
  S.document().views(itemViews(schemaType, S));

export default defaultDocumentNode;
