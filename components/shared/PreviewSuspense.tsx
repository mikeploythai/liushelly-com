"use client";

import { FaSpinner } from "react-icons/fa";

export { PreviewSuspense as default } from "next-sanity/preview";

export function Loading() {
  return <FaSpinner className="text-2xl mx-auto animate-spin" />;
}
