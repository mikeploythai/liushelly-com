import "server-only";

import { draftMode } from "next/headers";
import { cache } from "react";

export const isDraftMode = cache(() => {
  return draftMode().isEnabled;
});
