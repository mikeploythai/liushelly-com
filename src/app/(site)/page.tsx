import type { HomeData } from "~/lib/types";

import { sanityFetch } from "sanity-studio/lib/fetch";
import { homeQuery } from "sanity-studio/queries";
import HomeLayout from "~/components/home/layout";

export default async function HomePage() {
  const data = await sanityFetch<HomeData>({
    query: homeQuery,
    tags: ["home", "announcement", "services", "links"],
  });

  return <HomeLayout data={data} />;
}
