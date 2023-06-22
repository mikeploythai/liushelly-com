import { createClient } from "next-sanity";

export const projectId = <string>process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = <string>process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default sanity;
