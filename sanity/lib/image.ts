import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { clientEnv } from "~/env/client.mjs";

const imageBuilder = createImageUrlBuilder({
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
