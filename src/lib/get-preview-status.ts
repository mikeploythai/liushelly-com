import "server-only";

import { draftMode } from "next/headers";
import { cache } from "react";

export const getPreviewStatus = cache(() => {
  return draftMode().isEnabled;
});
