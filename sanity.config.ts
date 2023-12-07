/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { pexelsImageAsset } from "sanity-plugin-asset-source-pexels";
import {
  defineUrlResolver,
  type IframeOptions,
} from "sanity-plugin-iframe-pane";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";
import { media, mediaAssetSource } from "sanity-plugin-media";
import defaultDocumentNode from "sanity-studio/plugins/default-document-node";
import structure from "sanity-studio/plugins/structure";
import { theme } from "sanity-studio/theme";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import type { PreviewSecret } from "~/lib/types";

import home from "sanity-studio/schema/singletons/home";
import { clientEnv } from "~/env/client.mjs";
import { schema, singletons } from "./sanity-studio/schema";

import portfolio from "sanity-studio/schema/orderables/portfolio";
import services from "sanity-studio/schema/orderables/services";
import socials from "sanity-studio/schema/orderables/socials";
import testimonials from "sanity-studio/schema/orderables/testimonials";
import aboutMe from "sanity-studio/schema/singletons/about-me";
import announcement from "sanity-studio/schema/singletons/announcement";

const previewDocs = [
  home.name,
  aboutMe.name,
  announcement.name,
  services.name,
  portfolio.name,
  testimonials.name,
  socials.name,
] satisfies string[];

const previewSlugDocs = [
  aboutMe.name,
  services.name,
  portfolio.name,
] satisfies typeof previewDocs;

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
  theme,
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
    pexelsImageAsset({ useProxyClient: true }),
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        );
      },
    },
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          ({ templateId }) =>
            !singletons.find(
              ({ name }) => name === templateId || templateId === "media.tag",
            ),
        );
      }

      return prev;
    },
    actions: (prev, ctx) => {
      if (singletons.find(({ name }) => ctx.schemaType === name)) {
        const allowedActions = ["discardChanges", "restore", "publish"];
        return [
          ...prev.filter(({ action }) => allowedActions.includes(action!)),
        ];
      }

      return prev;
    },
  },
});

export { iframeOptions, previewDocs };
