import { createClient } from "next-sanity";
import { clientEnv } from "~/env/client.mjs";

export const client = createClient({
  apiVersion: "2023-11-18",
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,
  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
});
