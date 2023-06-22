import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { pexelsImageAsset } from "sanity-plugin-asset-source-pexels";
import { deskTool } from "sanity/desk";
import { dataset, projectId } from "./client";
import { defaultDocumentNode, structure } from "./studio/deskCustomization";
import { schemaTypes } from "./studio/schemas";

export default defineConfig({
  title: "SL Studio",
  basePath: "/studio",

  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
      structure: structure,
    }),
    visionTool(),
    pexelsImageAsset({
      useProxyClient: true,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
