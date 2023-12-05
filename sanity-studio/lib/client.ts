import { createClient } from "next-sanity";
import { clientEnv } from "~/env/client.mjs";

export const client = createClient({
  apiVersion: clientEnv.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  perspective: "published",
});
