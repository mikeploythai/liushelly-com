import "server-only";

import type { QueryParams } from "sanity";

import { serverEnv } from "~/env/server.mjs";
import { isPreviewMode } from "~/lib/is-preview-mode";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    ...(isPreviewMode() && {
      token: serverEnv.SANITY_READ_TOKEN,
      perspective: "previewDrafts",
    }),
    next: {
      revalidate: isPreviewMode() ? 0 : false, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}
