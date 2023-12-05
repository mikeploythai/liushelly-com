"use client";

import dynamic from "next/dynamic";
import { suspend } from "suspend-react";

const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol("sanity-studio/lib/client");

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const { client } = suspend(
    () => import("sanity-studio/lib/client"),
    [UniqueKey],
  );

  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
}
