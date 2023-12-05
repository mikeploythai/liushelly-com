/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";
import defaultDocumentNode from "sanity-studio/plugins/default-document-node";
import structure from "sanity-studio/plugins/structure";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import type { PreviewSecret } from "~/lib/types";

import {
  defineUrlResolver,
  type IframeOptions,
} from "sanity-plugin-iframe-pane";
import { clientEnv } from "~/env/client.mjs";
import { schema } from "./sanity-studio/schema";

import home from "sanity-studio/schema/singletons/home";

const previewDocs = [home.name] satisfies string[];
const previewSlugDocs = [] satisfies typeof previewDocs;
const previewBasePathname = "/api/preview";

const urlResolver = defineUrlResolver({
  base: previewBasePathname,
  requiresSlug: previewSlugDocs,
});

const iframeOptions: IframeOptions = {
  url: urlResolver,
  urlSecretId: clientEnv.NEXT_PUBLIC_SANITY_PREVIEW_SECRET as PreviewSecret,
  loader: "Loading preview...",
  reload: { button: true },
};

export default defineConfig({
  title: "SL Studio",
  basePath: "/studio",
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({ structure, defaultDocumentNode }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION }),
    previewUrl({
      base: previewBasePathname,
      requiresSlug: previewSlugDocs,
      urlSecretId: clientEnv.NEXT_PUBLIC_SANITY_PREVIEW_SECRET as PreviewSecret,
      matchTypes: previewDocs,
    }),
  ],
});

export { iframeOptions, previewDocs };
