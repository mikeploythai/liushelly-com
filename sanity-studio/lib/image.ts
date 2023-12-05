import type { Image } from "sanity";

import createImageUrlBuilder from "@sanity/image-url";
import { clientEnv } from "~/env/client.mjs";

const imageBuilder = createImageUrlBuilder({
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
});

export const sanityImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
