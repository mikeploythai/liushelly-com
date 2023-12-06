"use client";

import type { HomeData } from "~/lib/types";

import { useLiveQuery } from "next-sanity/preview";
import { homeQuery } from "sanity-studio/queries";
import HomeLayout from "./layout";

export default function HomeLayoutPreview({
  initData = {} as HomeData,
}: {
  initData: HomeData;
}) {
  const [data] = useLiveQuery(initData, homeQuery);

  return <HomeLayout data={data} />;
}
