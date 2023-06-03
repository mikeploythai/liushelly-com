import { definePreview } from "next-sanity/preview";
import { dataset, projectId } from "./client";

function onPublicAccessOnly() {
  throw new Error(`Please log in to access draft mode.`);
}
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
