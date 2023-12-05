import "server-only";

import { draftMode } from "next/headers";
import { cache } from "react";

export const isPreviewMode = cache(() => {
  return draftMode().isEnabled;
});
