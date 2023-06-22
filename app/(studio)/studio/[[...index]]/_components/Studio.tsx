"use client";

import config from "@/lib/sanity/config";
import { NextStudio } from "next-sanity/studio";

export default function Studio() {
  return <NextStudio config={config} />;
}
